import styled from "styled-components";

export const Container = styled.div`
  background-image: url("assets/images/fundo.jpg");
  background-size: cover;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;

  img {
    display: block;
    margin: auto auto 20px auto;
    height: 96px;
    max-width: 96px;
  }
`;

export const Input = styled.input`
  background-color: #fff;
  border: 0;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  height: 40px;
`;

export const Button = styled.button`
  background-color: #e5293e;
  border: 0;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
`;
