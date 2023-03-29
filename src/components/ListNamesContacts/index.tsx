import { useContext, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { ContactContext } from "../../contexts/contactContext";
import EditComponentContact from "../EditContact";
import ListStyled from "./styled";

function ListNameContacts() {
  const {
    input,
    contact,
    setDataLi,
    openCloseModalEdit,
    setOpenCloseModalEdit,
  } = useContext(ContactContext);

  const search = contact.filter((elem) =>
    elem.name.toLowerCase().includes(input.toLocaleLowerCase())
  );

  return (
    <ListStyled>
      {input != ""
        ? search.map((elem, index) => (
            <li
              onClick={() => {
                setOpenCloseModalEdit(!openCloseModalEdit);
                setDataLi({
                  id: elem.id,
                  name: elem.name,
                  email: elem.email,
                  telefone: elem.telefone,
                });
              }}
              id={elem.id}
              key={index}
              className="contact-li"
            >
              <p>{elem.name}</p>
              <IoIosArrowDropdown
                onClick={() => {
                  setOpenCloseModalEdit(!openCloseModalEdit);
                  setDataLi({
                    id: elem.id,
                    name: elem.name,
                    email: elem.email,
                    telefone: elem.telefone,
                  });
                }}
              />
            </li>
          ))
        : contact.map((elem, index) => (
            <li
              onClick={() => {
                setOpenCloseModalEdit(!openCloseModalEdit);
                setDataLi({
                  id: elem.id,
                  name: elem.name,
                  email: elem.email,
                  telefone: elem.telefone,
                });
              }}
              id={elem.id}
              key={index}
              className="contact-li"
            >
              <p>{elem.name}</p>
              <IoIosArrowDropdown
                onClick={() => {
                  setOpenCloseModalEdit(!openCloseModalEdit);
                  setDataLi({
                    id: elem.id,
                    name: elem.name,
                    email: elem.email,
                    telefone: elem.telefone,
                  });
                }}
              />
            </li>
          ))}
      {openCloseModalEdit && <EditComponentContact />}
    </ListStyled>
  );
}

export default ListNameContacts;
