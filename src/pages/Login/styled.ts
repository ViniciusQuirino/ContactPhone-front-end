import styled from "styled-components";

const Container = styled.div`
  background-color: var(--color-one);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  p {
    width: 290px;
    text-align: center;
    font: var(--font-text-0);
    color: var(--color-two);
  }

  h3 {
    color: var(--color-two);
    font: var(--font-title-1);
    margin: 0 auto;
  }

  .container-login {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    border: 1px solid var(--color-two);
    border-radius: var(--radius-2);
    padding: 10px;
    max-width: 400px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .input {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  label {
    margin-bottom: 10px;
    font: var(--font-text-0);
    color: var(--color-two);
  }

  input {
    width: 100%;
    height: 40px;
    font-size: 16px;
    border-radius: 5px;
    background: var(--color-one);
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
    color: var(--grey-1);
  }

  .login-svg {
    position: absolute;
    right: 0.8rem;
    top: 45px;
    cursor: pointer;
    color: var(--color-two);
    cursor: pointer;
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
  }

  .bottom {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .link {
    text-decoration: none;
    color: var(--color-two);
    font: var(--font-text-1);
  }

  .register {
    margin-top: 8px;
    padding-top: 12px;
    background-color: var(--color-two);
    text-decoration: none;
    color: var(--color-one);
    height: 40px;
    border: none;
    border-radius: 5px;
    font: var(--font-text-1);
  }

  .register:hover {
    background-color: rgb(134, 142, 150, 0.7);
  }
`;

export default Container;
