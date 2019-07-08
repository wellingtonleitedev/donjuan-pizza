import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    font-family: Helvetica;
  }

  li{
    list-style: none;
  }

  a{
    color: inherit;

    &hover{
      text-decoration: none;
      color: inherit;
    }
  }

  .error{
    background-color: #dc3545;
    border-radius: 5px;
    color: #fff;
    margin-bottom: 20px;
    padding: 10px 20px;
    text-align: center;
  }
`;

export default GlobalStyle;
