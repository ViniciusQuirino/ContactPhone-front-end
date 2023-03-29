import { useContext, useState } from "react";
import { schemaSignup } from "../../validations/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { BsEyeFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import General from "./styled";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { iFormSignup } from "../../contexts/UserContext";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormSignup>({
    resolver: yupResolver(schemaSignup),
  });
  const { registerUser } = useContext(UserContext);

  const [passwordOne, setPasswordOne] = useState(false);
  const [passwordTwo, setpasswordTwo] = useState(false);

  return (
    <General>
      <img className="logo" src={logo} alt="logotipo" />
      <form onSubmit={handleSubmit(registerUser)}>
        <div className="top">
          <h3>Crie sua conta</h3>
          <span>Rapido e grátis, vamos nessa!</span>
        </div>
        <div>
          <label htmlFor="signup-name">Nome</label>
          <input
            {...register("name")}
            type="text"
            id="signup-name"
            placeholder="Digite seu nome"
          />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <label htmlFor="signup-email">E-mail</label>
          <input
            {...register("email")}
            type="text"
            id="signup-email"
            placeholder="Digite seu email"
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="signup-password">Senha</label>
          <input
            {...register("password")}
            id="signup-password"
            placeholder="Digite sua senha"
            type={passwordOne ? "text" : "password"}
          />
          <BsEyeFill onClick={() => setPasswordOne(!passwordOne)} />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <label htmlFor="signup-confirm-password">Confirmar senha</label>
          <input
            {...register("confirmPassword")}
            id="signup-confirm-password"
            placeholder="Confirme sua senha"
            type={passwordTwo ? "text" : "password"}
          />
          <BsEyeFill onClick={() => setpasswordTwo(!passwordTwo)} />
          <p>{errors.confirmPassword?.message}</p>
        </div>
        <div>
          <label htmlFor="telephone">Telefone exemplo: (xx) xxxxx-xxxx</label>
          <input
            {...register("telefone")}
            type="text"
            id="telephone"
            placeholder="Digite o numero telefone"
          />
          <p>{errors.telefone?.message}</p>
        </div>
        <button type="submit">Cadastrar</button>
        <Link to="/" className="dev">
          Voltar para a página de login
        </Link>
      </form>
      <p className="dev">© Desenvolvido por Vinicius Quirino</p>
    </General>
  );
}

export default Signup;
