import axios from "axios";

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";
export const UPDATE_TOKEN = "UPDATE_TOKEN";
export const LOGOUT_USER = "LOGOUT_USER";

let token = localStorage.getItem("token") || "";

const authRequest = () => ({
  type: AUTH_REQUEST,
});

const authError = () => ({
  type: AUTH_ERROR,
});

const authSuccess = (token) => ({
  type: AUTH_SUCCESS,
  payload: token,
});

export const getToken = (payload, navigate) => async (dispatch) => {
  dispatch(authRequest());
  try {
    let res = await axios.post("https://reqres.in/api/login", payload);
    let data = await res.data;
    console.log(data);
    dispatch(authSuccess(data.token));

    navigate("/");

    localStorage.setItem("token", data.token);
  } catch (err) {
    dispatch(authError());
  }
};

//updating Token

export const updateToken = (token) => async (dispatch) => {
  dispatch({
    type: UPDATE_TOKEN,
    payload: token,
  });
};

//logout

export const logoutUser = () => async (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
  localStorage.setItem("token", "");
};
