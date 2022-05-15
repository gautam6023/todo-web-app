import styled from "styled-components";

export const UserDtailsCon = styled.div`
  // border: 1px solid;
  height: auto;
  display: flex;
  flex-direction: column;
  //align-items: center;
  text-align: left;
  box-sizing: border-box;
  padding: 10px;
  gap: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #ffffff;
  flex-wrap: wrap;
  margin: 15px 0;

  h4 {
    color: #171717;
  }

  .optionsLinks {
    //border: 1px solid;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding: 20px;

    div {
      border: 1px solid;
      width: 100%;
      text-align: center;
      box-sizing: border-box;
      padding: 5px 20px;
      display: flex;

      justify-content: space-between;

      .links {
        text-decoration: none;
        color: black;
      }
    }
  }
`;
export const CreateTaskCon = styled.form`
  border: 1px solid;
  width: 80%;
  position: relative;
  left: 16%;
  top: 0;
  height: 1000px;

  .createTaskSec {
    position: absolute;
    top: 20%;
    border: 1px solid;
    width: 25%;
    height: auto;
    display: flex;

    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    padding: 20px;

    .radioOptions,
    .tags {
      border: 1px solid;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      justify-content: center;
    }

    .titleInp {
      height: 35px;
    }
    input::placeholder,
    textarea::placeholder {
      text-align: center;
      font-size: 16px;
    }

    .flex {
      width: 60%;
      display: flex;
      align-items: center;
      margin-left: 100px;
      gap: 15px;
    }
  }
  .subTodoCon {
    /* border: 1px solid; */
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: auto;
    justify-content: center;
    align-items: center;
  }
  .subTodoTasks {
    width: 50%;
    /* border: 1px solid; */
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .submitCon {
    position: absolute;
    right: 5%;
    top: 5%;
    display: flex;
    flex-direction: column;
    width: 20%;
    justify-content: center;
    align-items: center;
    gap: 20px;
    input,
    button {
      width: 70%;
      font-family: "Courier New", Courier, monospace;
      height: 40px;
      font-size: 18px;
    }
  }
`;
