import styled from "styled-components";

const ListStyled = styled.div`
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--color-one);
    margin: 8px 0;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
    animation: 0.5s ease 0s 1 normal forwards running showCard;
    transition: all 0.3s ease 0s;
  }
`;

export default ListStyled;
