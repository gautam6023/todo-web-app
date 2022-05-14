import styled from "styled-components";

export const LoginContainer = styled.form`
  border: 1px solid;
  width: 18%;

  margin: auto;
  //margin-top: 10%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  box-sizing: border-box;
  padding: 30px;

  .inpField {
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid; */
    align-items: center;
    input {
      height: 25px;
    }
    button {
      width: 100%;
      height: 35px;
    }
  }
`;
