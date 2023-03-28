import styled from "styled-components";

const ContainerDash = styled.div`
  width: 90%;
  margin: 0 auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:10px;
  }

  .dash-logo {
    height: 80px;
    width: 150px;
  }

  .div-logout {
    color: var(--grey-3);
    font: var(--font-text-1);
    border: none;
    width: 80px;
    height: 40px;
    border-radius: 5px;
    background-color: var(--grey-1);
  }

  .div-center {
    border-top: 2px solid var(--grey-1);
    border-bottom: 2px solid var(--grey-1);
    padding: 0.9rem;
  }

  .div-center h2 {
    font: var(--font-title-1);
    color: var(--grey-0);
    margin: 10px 0;
  }

  .div-center p {
    font: var(--font-text-1);
    color: var(--grey-0);
    margin: 10px 0;
  }

  .div-update{
    font: var(--font-text-1);
    border: none;
    width: 80px;
    height: 40px;
    border-radius: 5px;
    background-color: var(--grey-1);
    text-align:center ;
    display:flex;
    justify-content:center ;
  }

  .div-update p {
    color:var(--grey-3)
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  section h3 {
    font: var(--font-title-2);
    color: var(--grey-0);
  }

  .add {
    width: 30px;
    height: 30px;
    background-color: var(--grey-1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-1);
  }

  .add p {
    font-size: 22px;
    color: var(--grey-3);
  }

  .contact-ul {
    display: flex;
    flex-direction: column;
  }

  .contact-li {
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 40px;
    font: var(--font-text-0);
    padding: 0 15px;
    color: var(--grey-0);
  }

  .div-input {
    display: flex;
    justify-content: center;
    margin: 15px 0;
    flex-direction: column;
    text-align: center;
    color: var(--grey-0);
    gap: 15px;
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
    font: var(--font-text-3)
  }

  input:focus {
    outline: 0.11rem solid var(--color-two);
  }

  input::placeholder {
    color: var(--grey-0);
  }

  @media (min-width: 768px) {
   

    .div-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export default ContainerDash;
