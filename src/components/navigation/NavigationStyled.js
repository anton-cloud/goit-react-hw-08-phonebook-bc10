import styled from "styled-components";

export const NavigationContainer = styled.nav`
  .navList {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    align-items: center;
  }

  .navItem:not(:last-child) {
    margin-right: 20px;
  }

  .navLink {
    text-decoration: none;
    font-weight: 700;
    color: white;
  /* &:hover {
  } */
  }




  .navLinkActive {
    color: #00BFFF;
  }

  img {
    width: 40px;
    
  }
`;
