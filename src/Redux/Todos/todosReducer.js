import { ADD_SUBTODO } from "./action";

const innitState = {
  title: "",
  description: "",
  official: false,
  personal: false,
  others: false,
  subTodos: [],
  status: false,
  data: "",
};

export const todoReducer = (state = innitState, action) => {
  switch (action.type) {
    case ADD_SUBTODO:
      return {
        ...state,
        subTodos: [...state.subTodos, action.payload],
      };
    default:
      return state;
  }
};
