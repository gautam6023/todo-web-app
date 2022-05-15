import axios from "axios";

export const ADD_SUBTODO = "ADD_SUBTODO";
export const ADD_TODO = "ADD_TODO";
export const TODO_REQUEST = "TODO_REQUEST";
export const TODO_SUCCESS = "TODO_SUCCESS";
export const TODO_ERROR = "TODO_ERROR";
//adding sub todo
const addSubTodoType = (payload) => ({
  type: ADD_SUBTODO,
  payload,
});

export const addSubTodo = (payload) => async (dispatch) => {
  dispatch(addSubTodoType(payload));
};

//adding todo
const addTodoType = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const addNewTodo = (payload) => async (dispatch) => {
  try {
    let res = await axios.post(`http://localhost:8080/Todods`, payload);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
