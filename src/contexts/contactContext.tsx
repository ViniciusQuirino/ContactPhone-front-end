import { createContext, useState, ReactNode } from "react";
import { iFormEditContact } from "../components/EditContact";
import { toast } from "react-toastify";
import api from "../services/api";
import { iUserData } from "./UserContext";

interface iContactProvidersProps {
  children: ReactNode;
}

interface iContactContext {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setContact: React.Dispatch<React.SetStateAction<iContactsData[]>>;
  contact: iContactsData[];
  editContact: (data: iFormEditContact, id: iContactsData) => Promise<void>;
  dataLi: iContactsData;
  setDataLi: React.Dispatch<React.SetStateAction<iContactsData>>;
  openCloseModalEdit: boolean;
  setOpenCloseModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  removeContact: (id: string) => Promise<void>;
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  addOpenCloseModal: boolean;
  setAddOpenCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  addTechnology: (data: iUserData) => Promise<void>;
}

interface iContactsData {
  id: string;
  email: string;
  name: string;
  telefone: string;
  createdAt?: Date;
}

export const ContactContext = createContext({} as iContactContext);

const ContactProvider = ({ children }: iContactProvidersProps) => {
  const [input, setInput] = useState("");
  const [contact, setContact] = useState<iContactsData[]>([]);
  const [dataLi, setDataLi] = useState<iContactsData>({} as iContactsData);
  const [openCloseModalEdit, setOpenCloseModalEdit] = useState(false);
  const [addOpenCloseModal, setAddOpenCloseModal] = useState(false);
  const [globalLoading, setGlobalLoading] = useState<boolean>(false);

  const token = localStorage.getItem("@FullStack:token");

  async function addTechnology(data: iUserData): Promise<void> {
    setGlobalLoading(true);
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const response = await api.post("/contact", data);

      toast.success("Contato criado!");

      setContact([...contact, response.data]);
      setAddOpenCloseModal(!addOpenCloseModal);
    } catch (error) {
      toast.error("O nome, email e telefone deve ser unicos!");
    } finally {
      setGlobalLoading(false);
    }
  }

  async function editContact(
    data: iFormEditContact,
    dataLi: iContactsData
  ): Promise<void> {
    setGlobalLoading(true);
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const response = await api.patch(`/contact/${dataLi.id}`, data);

      const differentFind = contact.filter(elem => elem.id != response.data.id)
      setContact([...differentFind, response.data]);
      toast.success("Contato editado!");
    } catch (error) {
      toast.error("O nome, email e telefone deve ser unicos!");
    } finally {
      setGlobalLoading(false);
    }
  }

  async function removeContact(id: string): Promise<void> {
    setGlobalLoading(true);
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      await api.delete(`/contact/${id}`);

      toast.success("Contato removido!");
      const filter = contact.filter((elem) => elem.id !== id);

      setContact(filter);
    } catch (error) {
      console.log(error);
    } finally {
      setGlobalLoading(false);
    }
  }

  return (
    <ContactContext.Provider
      value={{
        input,
        setInput,
        setContact,
        contact,
        editContact,
        dataLi,
        setDataLi,
        openCloseModalEdit,
        setOpenCloseModalEdit,
        removeContact,
        globalLoading,
        setGlobalLoading,
        addOpenCloseModal,
        setAddOpenCloseModal,
        addTechnology,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
