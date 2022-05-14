import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS, UPDATE_TOKEN } from "./action";

const inintState = {
  token: "",
  isLoading: false,
  isError: false,
};

export const authReducer = (state = inintState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        token: "",
      };

    case AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: action.payload,
      };

    case AUTH_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
        token: "",
      };

    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};
