import { useState } from "react";
import logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import ContainerDash from "./styled";
import ListNameContacts from "../../components/ListNamesContacts";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <ContainerDash>
      <header>
        <img className="dash-logo" src={logo} alt="logotipo" />
        <button
          className="div-logout"
          onClick={() => {
            // localStorage.removeItem("@KenzieHub:token");
            // localStorage.removeItem("@KenzieHub:userid");
            navigate("/");
          }}
        >
          Sair
        </button>
      </header>
      <div className="div-center">
        <h2>Olá, Vinicius Quirino</h2>
        <p>Seu numero é: (14) 99853-6591</p>
        <div className="div-update">
          <p>Editar</p>
        </div>
      </div>

      <section>
        <h3>Contatos</h3>
        <div className="add">
          <p>+</p>
        </div>
      </section>
      <div className="div-input">
        <p>Digite o nome do contato para encontrar mais rapido!</p>
        <input type="text" placeholder="Digite o nome aqui..." />
      </div>
      <main>
        <ul className="contact-ul">
          <ListNameContacts />
          <ListNameContacts />
          <ListNameContacts />
        </ul>
      </main>
    </ContainerDash>
  );
}

export default Dashboard;
