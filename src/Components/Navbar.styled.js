import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 15%;
  height: 100%;
  background-color: #94a3b8;
  box-sizing: border-box;
  padding: 10px;
  position: fixed;
  left: 0;
  top: 0;

  .logoCon {
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 20px;

    border: 1px solid;
    height: 80px;

    img {
      width: 15%;
    }
    p {
      margin: 0;
      font-weight: bold;
      font-size: 20px;
      color: #f9fafb;
    }
  }

  .logOut {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 80%;
      height: 35px;
      border-radius: 5px;
      border: 0;
      background-color: #1e293b;
      color: #ffffff;
      font-size: large;
    }
  }
  .login {
    bottom: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 80%;
      height: 35px;
      border-radius: 5px;
      border: 0;
      background-color: #e2e8f0;
      color: black;
      font-size: large;
    }
  }
`;
