import { useContext } from "react";
import { ContactContext } from "../../contexts/contactContext";
import ModalEdit from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaEditContact } from "../../validations";

export interface iFormEditContact {
  id: string;
  name: string;
  email: string;
  telefone: string;
}

function EditComponentContact() {
  const {
    editContact,
    dataLi,
    openCloseModalEdit,
    setOpenCloseModalEdit,
    removeContact,
  } = useContext(ContactContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormEditContact>({
    resolver: yupResolver(schemaEditContact),
  });

  return (
    <ModalEdit>
      <div className="ContainerModal">
        <header className="header-modal-edit">
          <h3>Editar contatos</h3>
          <button
            onClick={() => {
              setOpenCloseModalEdit(!openCloseModalEdit);
            }}
            className="closeModal"
          >
            X
          </button>
        </header>
        <form
          onSubmit={handleSubmit((data) => {
            setOpenCloseModalEdit(!openCloseModalEdit);
            editContact(data, dataLi);
          })}
        >
          <div className="edit-inputs">
            <label>Nome</label>
            <input
              {...register("name")}
              type="text"
              defaultValue={dataLi.name}
              placeholder="Digite o nome aqui"
            />
            <p>{errors.name?.message}</p>
          </div>
          <div className="edit-inputs">
            <label>E-mail</label>
            <input
              {...register("email")}
              type="text"
              defaultValue={dataLi.email && dataLi.email}
              placeholder="Digite o email aqui"
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className="edit-inputs">
            <label>Telefone exemplo: (xx) xxxxx-xxxx</label>
            <input
              {...register("telefone")}
              defaultValue={dataLi.telefone}
              placeholder="Digite o telefone aqui"
            />
            <p>{errors.telefone?.message}</p>
          </div>

          <div className="divButton">
            <button type="submit">Salvar</button>
            <button
              onClick={() => {
                removeContact(dataLi.id);
                setOpenCloseModalEdit(!openCloseModalEdit);
              }}
            >
              Excluir
            </button>
          </div>
        </form>
      </div>
    </ModalEdit>
  );
}

export default EditComponentContact;
