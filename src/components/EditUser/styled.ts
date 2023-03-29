import styled from "styled-components";

const ModalEditUser = styled.div`
 position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  .ContainerModal {
    position: relative;
    top: -40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--grey-0);
    background: var(--color-five);
    width: 100%;
    max-width: 500px;
    padding: 0px 1rem 1rem;
    border-radius: 5px;
  }

  .header-modal-edit {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-five);
    width: 100%;
    padding: 1rem;
    border-radius: 5px;
  }

  .header-modal-edit h3 {
    font: var(--font-title-3);
  }

  .closeModal {
    background-color: var(--color-one);
    color: var(--grey-0);
    font: var(--font-title-2);
    border: none;
    border-radius: 5px;
    padding: 6px 10px;
  }

  form {
    width: 94%;
    background: var(--color-five);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0.6rem 0;
    box-sizing: border-box;
    border-radius: 5px;
  }

  form div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    position: relative;
  }

  form div label {
    align-self: flex-start;
    font: var(--font-text-1);
    color: var(--grey-0);
  }

  form div input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background: var(--color-one);
    border: none;
    padding: 0px 2.5rem 0px 0.8rem;
    box-sizing: border-box;
    color: var(--grey-0);
    font: var(--font-text-3);
  }

  .edit-inputs input::placeholder {
    color: var(--grey-1);
  }

  form div p {
    color: var(--negative);
    font: var(--font-text-1);
  }

  .divButton {
    display: flex;
    flex-direction: row;
  }

  .divButton :first-child {
    background-color: var(--color-one);
    color: var(--grey-0);
    font: var(--font-text-1);
    border: none;
    width: 65%;
    height: 40px;
    border-radius: 5px;
  }

  .divButton button:nth-child(2) {
    background-color: var(--grey-1);
    color: var(--grey-0);
    font: var(--font-text-1);
    border: none;
    width: 35%;
    height: 40px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    .ContainerModal {
      width: 90%;
    }
  }
`


export default ModalEditUser