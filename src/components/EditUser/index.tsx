import { useContext } from "react";
import ModalEditUser from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaEditUser } from "../../validations";
import { UserContext } from "../../contexts/UserContext";

interface iFormUserEditContact {
  id: string;
  name: string;
  email: string;
  telefone: string;
}

function EditUser() {
  const {
    userOpenCloseModal,
    setUserOpenCloseModal,
    editUser,
    deletedUser,
    userData,
  } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormUserEditContact>({
    resolver: yupResolver(schemaEditUser),
  });

  return (
    <ModalEditUser>
      <div className="ContainerModal">
        <header className="header-modal-edit">
          <h3>Editar contatos</h3>
          <button
            onClick={() => {
              setUserOpenCloseModal(!userOpenCloseModal);
            }}
            className="closeModal"
          >
            X
          </button>
        </header>
        <form
          onSubmit={handleSubmit((data) => {
            setUserOpenCloseModal(!userOpenCloseModal);
            editUser(data);
          })}
        >
          <div className="edit-inputs">
            <label>Nome</label>
            <input
              {...register("name")}
              type="text"
              defaultValue={userData.name}
              placeholder="Digite o nome aqui"
            />
            <p>{errors.name?.message}</p>
          </div>
          <div className="edit-inputs">
            <label>E-mail</label>
            <input
              {...register("email")}
              type="text"
              defaultValue={userData.email && userData.email}
              placeholder="Digite o email aqui"
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className="edit-inputs">
            <label>Telefone exemplo: (xx) xxxxx-xxxx</label>
            <input
              {...register("telefone")}
              defaultValue={userData.telefone}
              placeholder="Digite o telefone aqui"
            />
            <p>{errors.telefone?.message}</p>
          </div>

          <div className="divButton">
            <button type="submit">Salvar</button>
            <button
              onClick={() => {
                deletedUser();
                setUserOpenCloseModal(!userOpenCloseModal);
              }}
            >
              Excluir
            </button>
          </div>
        </form>
      </div>
    </ModalEditUser>
  );
}

export default EditUser;
