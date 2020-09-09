import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, "#3b9eff")};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const Medidas = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
`;

export const MedidasDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CheckBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CheckBoxLabel = styled.label`
  margin: 5px 0px;
`;

export const Botoes = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: 150px;
  margin: 5px 0;
`