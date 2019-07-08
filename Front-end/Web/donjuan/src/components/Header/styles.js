import styled from "styled-components";

export const NavBar = styled.header`
  background-color: #0b2031;
  width: 100%;

  ul {
    display: flex;
    justify-content: center;
    margin: auto;
    max-width: 1200px;
    padding: 2em 0;
    justify-content: space-between;
    width: 100%;

    h2 {
      color: #fff;
    }

    li {
      align-items: center;
      display: flex;

      div {
        border-right: 1px solid #706e7b;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 15px;
        padding: 0 15px;
      }

      h3 {
        color: #fff;
        margin-bottom: 5px;
      }

      button {
        background-color: transparent;
        border: 0;
        color: #706e7b;
        cursor: pointer;
      }
    }
  }
`;

export const Logo = styled.img`
  margin-right: 10px;
  max-height: 32px;
  max-width: 32px;
`;

export const Baged = styled.figure`
  background-color: #e5293e;
  border-radius: 18px;
  padding: 9px 12px;

  img {
  }
`;
