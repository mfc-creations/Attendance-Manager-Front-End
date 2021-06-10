import {
  REGISTER_NUMBER_LOADING,
  REGISTER_NUMBER_SUCCESS,
  PASSWORD_LOADING,
  PASSWORD_SUCCESS,
  MARK_ATTENDANCE_LOADING,
  MARK_ATTENDANCE_SUCCESS,
  CHECK_ATTENDANCE_LOADING,
  CHECK_ATTENDANCE_SUCCESS,
  STUDENT_ERROR,
} from "./types";
import axios from "../../utils/axiosInstance";

export const checkRegisterNumber = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_NUMBER_LOADING });
    const res = await axios().post("/student/checkregisternumber", data);
    if (res.data.password) {
      history.push("enter-password");
    } else {
      history.push("create-password");
    }
    dispatch({ type: REGISTER_NUMBER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: STUDENT_ERROR,
      payload: err.response.data.err,
    });
  }
};

export const createPassword = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: PASSWORD_LOADING });
    const res = await axios().post("/student/createpassword", data);
    localStorage.setItem("student", res.data.token);
    dispatch({ type: PASSWORD_SUCCESS, payload: res.data });
    history.push("/mark-attendance");
  } catch (err) {
    dispatch({
      type: STUDENT_ERROR,
      payload: err.response.data.err,
    });
  }
};

export const checkPassword = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: PASSWORD_LOADING });
    const res = await axios().post("/student/login", data);
    localStorage.setItem("student", res.data.token);
    dispatch({ type: PASSWORD_SUCCESS, payload: res.data });
    history.push("/mark-attendance");
  } catch (err) {
    dispatch({
      type: STUDENT_ERROR,
      payload: err.response.data.err,
    });
  }
};

export const markAttendance = (data) => async (dispatch) => {
  try {
    dispatch({ type: MARK_ATTENDANCE_LOADING });
    const res = await axios("student").post("/student/markattendance", data);
    dispatch({ type: MARK_ATTENDANCE_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({
      type: STUDENT_ERROR,
      payload: err.response.data.err,
    });
  }
};

export const checkAttendance = (date) => async (dispatch) => {
  try {
    dispatch({ type: CHECK_ATTENDANCE_LOADING });
    const res = await axios("student").post(`/student/checkattendance`, date);
    dispatch({ type: CHECK_ATTENDANCE_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({
      type: STUDENT_ERROR,
      payload: err.response.data.err,
    });
  }
};
