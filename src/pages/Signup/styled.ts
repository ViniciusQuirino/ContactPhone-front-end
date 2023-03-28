import styled from "styled-components";

const General = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:15px;

  .top {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  .top h3 {
    font: var(--font-title-2);
    color: var(--color-two);
  }

  .top span {
    font: var(--font-text-1);
    color: var(--color-two);
  }

  form {
    width:90%;
    max-width:400px ;
    display: flex;
    flex-direction: column;
    background-color: var(--color-one);
    padding: 2rem 1rem;
    gap: 1.2rem;
    border: 1px solid var(--color-two);
    margin-bottom: 30px;
    border-radius: 5px;
  }

  form div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
  }

  div p {
    color: var(--negative);
    font: var(--font-text-1);
  }

  form div input {
    width: 100%;
    height: 40px;
    font-size: 16px;
    border-radius: 5px;
    background-color: var(--color-one);
    border: 2px solid var(--color-two);
    padding: 0px 2.5rem 0px 0.8rem;
    box-sizing: border-box;
    color: var(--color-two);
    font: var(--font-text-3);
  }

  input:focus {
    outline: 0.11rem solid var(--color-two);
  }

  input::placeholder {
    color: var(--color-two);
  }

  label {
    color: var(--color-two);
    font: var(--font-text-1);
  }

  div svg {
    position: absolute;
    right: 0.8rem;
    top: 37px;
    cursor: pointer;
    color: var(--color-two);
    cursor: pointer;
  }

  form button {
    background: var(--color-one);
    color: var(--color-two);
    font: var(--font-text-1);
    border: none;
    width: 100%;
    height: 40px;
    border-radius: 5px;
  }

  form button {
    background-color: var(--color-two);
    color: var(--color-one);
    font: var(--font-text-1);
    border: none;
    width: 100%;
    height: 40px;
    border-radius: 5px;
  }

  .dev {
    font-size: 16px;
    color:var(--color-two);
    text-align: center;
  }
`;

export default General;
