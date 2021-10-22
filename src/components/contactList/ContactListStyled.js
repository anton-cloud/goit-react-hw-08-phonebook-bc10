import styled from "styled-components";

export const ContactListStyled = styled.ul`
  list-style: none;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    margin: 10px;
  }

  button {
    height: 25px;
    margin-right: 20px;
    padding: 0;
    width: 60px;
    height: 30px;
    
    &:hover .text {
      color: red;
    }
  }
`;
