import React, { useState } from "react";
import styled from "styled-components";
import { CreateTaskCon } from "./Common.styled";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { addSubTodo, addNewTodo } from "../Redux/Todos/action";
const CreateTask = () => {
  const dispatch = useDispatch();
  const { subTodos } = useSelector((state) => state.todos);
  //   console.log(subTodos);
  const [subTask, setSubTask] = useState({
    subTodo: "",
    status: false,
  });

  const [todoData, setTodoData] = useState({});
  //const [subTaskArr, setSubTaskArr] = useState([]);

  //Handliing subTasks

  const handleSubtask = () => {
    //setSubTask();
    //setSubTaskArr([...subTaskArr, subTask]);
    dispatch(addSubTodo({ ...subTask, id: nanoid() }));
  };

  //handlingChange

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let type = e.target.type;
    let classN = e.target.className;

    if (type === "checkbox") {
      setTodoData({
        ...todoData,
        subTodos,
        [name]: e.target.checked,
      });
    } else if (type == "radio") {
      setTodoData({
        ...todoData,
        subTodos,
        [name]: classN,
      });
    } else {
      setTodoData({
        ...todoData,
        subTodos,
        [name]: value,
      });
    }
  };
  //handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoData);

    dispatch(addNewTodo(todoData));
  };
  return (
    <CreateTaskCon onSubmit={handleSubmit}>
      <div className="createTaskSec">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => handleChange(e)}
          className="titleInp"
          required
        />
        <textarea
          placeholder="Description"
          cols="30"
          rows="8"
          name="description"
          onChange={(e) => handleChange(e)}
        ></textarea>
        <div className="radioOptions">
          <div className="flex">
            <input
              type="radio"
              className="todo"
              name="task_status"
              onChange={(e) => handleChange(e)}
            />
            <p>Todo</p>
          </div>
          <div className="flex">
            <input
              type="radio"
              className="inProgress"
              name="task_status"
              onChange={(e) => handleChange(e)}
            />
            <p>In Progress</p>
          </div>
          <div className="flex">
            <input
              type="radio"
              className="done"
              name="task_status"
              onChange={(e) => handleChange(e)}
            />
            <p>Done</p>
          </div>
        </div>
        <div className="tags">
          <div className="flex">
            <input
              type="checkbox"
              name="offcial"
              onChange={(e) => handleChange(e)}
            />
            <p>Official</p>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              name="personal"
              onChange={(e) => handleChange(e)}
            />
            <p>Personal</p>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              className="others"
              name="status"
              onChange={(e) => handleChange(e)}
            />
            <p>Others</p>
          </div>
        </div>
      </div>
      <div className="submitCon">
        <input
          type="date"
          name="date"
          onChange={(e) => handleChange(e)}
          required
        />
        <button type="submit">Create a new task</button>
      </div>

      <div className="subTaks">
        <div className="inpSubTask">
          <input
            type="text"
            className="titleInp"
            name="subTask"
            value={subTask.subTodo}
            onChange={(e) =>
              setSubTask({ ...subTask, subTodo: e.target.value })
            }
          />
          <button type="button" onClick={() => handleSubtask()}>
            Add
          </button>
        </div>
        <div className="subTodoCon">
          {subTodos.map((el) => {
            return (
              <div key={el.id} className="subTodoTasks">
                <input type="checkbox" />
                <h4>{el.subTodo}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </CreateTaskCon>
  );
};

export default CreateTask;
