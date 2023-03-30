import { createContext, useState, ReactNode, useContext } from "react";
import { ContactContext } from "./contactContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import api from "../services/api";

interface iProvidersProps {
  children: ReactNode;
}

export interface iFormLogin {
  email: string;
  password: string;
}

export interface iFormSignup {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  telefone?: string;
}

interface iUserContext {
  signInUser: (data: iFormLogin) => void;
  registerUser: (data: iFormSignup) => void;
  setCurrentRoute: React.Dispatch<React.SetStateAction<string | null>>;
  userData: iUserData;
  userOpenCloseModal: boolean;
  setUserOpenCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  editUser: (data: iUserData) => Promise<void>;
  deletedUser: () => Promise<void>;
}

export interface iUserData {
  id?: string;
  name: string;
  email: string;
  telefone: string;
}

export const UserContext = createContext({} as iUserContext);

const Providers = ({ children }: iProvidersProps) => {
  const [currentRoute, setCurrentRoute] = useState<string | null>(null);
  const [userData, setUserData] = useState<iUserData>({} as iUserData);
  const [userOpenCloseModal, setUserOpenCloseModal] = useState(false);

  const { setContact, setGlobalLoading } = useContext(ContactContext);
  const token = localStorage.getItem("@FullStack:token");

  const navigate = useNavigate();

  useEffect(() => {
    async function autoLogin() {
      if (token) {
        setGlobalLoading(true);
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;

          const response = await api.get("/users");
          const contactsResponse = await api.get("/contact");

          setUserData({
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            telefone: response.data.telefone,
          });

          setContact(contactsResponse.data);

          navigate(currentRoute!);
        } catch (error) {
          localStorage.removeItem("@FullStack:token");
          navigate("/");
        } finally {
          setGlobalLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  async function editUser(data: iUserData): Promise<void> {
    setGlobalLoading(true);
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const response = await api.patch(`/users`, data);

      setUserData({
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        telefone: response.data.telefone,
      });

      toast.success("Usúario editado!");
    } catch (error) {
      toast.error("O nome, email e telefone deve ser unicos!");
    } finally {
      setGlobalLoading(false);
    }
  }

  async function deletedUser(): Promise<void> {
    setGlobalLoading(true);
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      await api.delete(`/users`);

      toast.success("Conta deletada!");
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setGlobalLoading(false);
    }
  }

  async function signInUser(data: iFormLogin): Promise<void> {
    setGlobalLoading(true);
    try {
      const response = await api.post("/login", data);

      const retriveUserResponse = await api.get("/users", {
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
      });

      setUserData({
        id: retriveUserResponse.data.id,
        name: retriveUserResponse.data.name,
        email: retriveUserResponse.data.email,
        telefone: retriveUserResponse.data.telefone,
      });

      localStorage.setItem("@FullStack:token", response.data.token);

      const contactsResponse = await api.get("/contact", {
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
      });

      setContact(contactsResponse.data);
      toast.success("Logado com sucesso!");
      navigate(`/dashboard`);
    } catch (error) {
      toast.error("Email ou senha invalido!");
    } finally {
      setGlobalLoading(false);
    }
  }

  async function registerUser(data: iFormSignup): Promise<void> {
    try {
      await api.post("users", data);

      navigate("/");
      toast.success("Usuário cadastrado com sucesso!");
    } catch (error) {
      toast.error("Esse usuário já existe!");
    }
  }

  return (
    <UserContext.Provider
      value={{
        signInUser,
        registerUser,
        setCurrentRoute,
        userData,
        userOpenCloseModal,
        setUserOpenCloseModal,
        editUser,
        deletedUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Providers;
