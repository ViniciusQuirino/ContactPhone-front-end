import { useContext } from "react";
import { ContactContext } from "../../contexts/contactContext";
import ModalAddContact from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaAddContact } from "../../validations";

export interface iFormAddContact {
  name: string;
  email: string;
  telefone: string;
}

function AddContact() {
  const { addOpenCloseModal, setAddOpenCloseModal, addTechnology } =
    useContext(ContactContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormAddContact>({
    resolver: yupResolver(schemaAddContact),
  });

  return (
    <ModalAddContact>
      <div className="add-ContainerModal">
        <header className="add-header-modal">
          <h3>Editar contatos</h3>
          <button
            onClick={() => {
              setAddOpenCloseModal(!addOpenCloseModal)
            }}
            className="closeModal"
          >
            X
          </button>
        </header>
        <form onSubmit={handleSubmit(addTechnology)}>
          <div className="add-inputs">
            <label>Nome</label>
            <input
              {...register("name")}
              type="text"
              placeholder="Digite o nome aqui"
            />
            <p>{errors.name?.message}</p>
          </div>
          <div className="add-inputs">
            <label>E-mail</label>
            <input
              {...register("email")}
              type="text"
              placeholder="Digite o email aqui"
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className="add-inputs">
            <label>Telefone exemplo: (xx) xxxxx-xxxx</label>
            <input
              {...register("telefone")}
              placeholder="Digite o telefone aqui"
            />
            <p>{errors.telefone?.message}</p>
          </div>

          <div className="addButton">
            <button type="submit">Salvar</button>
            <button
              onClick={() => {
                setAddOpenCloseModal(!addOpenCloseModal)
              }}
            >
              Fechar
            </button>
          </div>
        </form>
      </div>
    </ModalAddContact>
  );
}

export default AddContact;
