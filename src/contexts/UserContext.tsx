import { createContext, useState, ReactNode } from "react";
import { useEffect } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface iProvidersProps {
  children: ReactNode;
}

export interface iFormLogin {
  email: string;
  password: string;
}

export interface iFormSignup {
  name?: string;
  // email?: string;
  // password?: string;
  // confirmPassword?: string;
  // telefone?: string;
}

interface iUserContext {
  signInUser: (data: iFormLogin) => void;
  registerUser: (data: iFormSignup) => void;
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentRoute: React.Dispatch<React.SetStateAction<string | null>>;
}

export const UserContext = createContext({} as iUserContext);

const Providers = ({ children }: iProvidersProps) => {
  const [globalLoading, setGlobalLoading] = useState<boolean>(false);
  const [currentRoute, setCurrentRoute] = useState<string | null>(null);

  const token = localStorage.getItem("@KenzieHub:token");

  const navigate = useNavigate();

  useEffect(() => {
    async function autoLogin() {
      if (token) {
        setGlobalLoading(true);
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;

          const response = await api.get("/profile");

          navigate(currentRoute!);
        } catch (error) {
          localStorage.removeItem("@KenzieHub:token");
          navigate("/");
        } finally {
          setGlobalLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  async function signInUser(data: iFormLogin): Promise<void> {
    setGlobalLoading(true);
    try {
      const response = await api.post("/sessions", data);
      navigate(`/dashboard`);

      localStorage.setItem("@KenzieHub:token", response.data.token);
      localStorage.setItem("@KenzieHub:userid", response.data.user.id);

      toast.success("Logado com sucesso!", {
        theme: "dark",
      });
    } catch (error) {
      toast.error("Email ou senha invalido!", {
        theme: "dark",
      });
    } finally {
      setGlobalLoading(false);
    }
  }

  async function registerUser(data: iFormSignup): Promise<void> {
    
    console.log(data);
    try {
      await api.post("/users", data).then((res) => console.log(res.data));

      navigate("/");
      toast.success("Usuário cadastrado com sucesso!", {
        theme: "dark",
      });
    } catch (error) {
      toast.error("Esse usuário já existe!"),
        {
          theme: "dark",
        };
    }
  }

  return (
    <UserContext.Provider
      value={{
        signInUser,
        registerUser,
        globalLoading,
        setGlobalLoading,
        setCurrentRoute,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Providers;
