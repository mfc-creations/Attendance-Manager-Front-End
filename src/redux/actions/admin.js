import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  ATTENDANCE_FETCH_LOADING,
  ATTENDANCE_FETCH_SUCCESS,
  ADD_STUDENT_LOADING,
  ADD_STUDENT_SUCCESS,
  ADMIN_ERROR,
} from "./types";
import axios from "../../utils/axiosInstance";
import validator from "validator";

export const login = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_LOADING });
    const res = await axios().post("/admin/login", data);
    localStorage.setItem("admin", res.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });

    history.push("/attendance");
  } catch (err) {
    dispatch({
      type: ADMIN_ERROR,
      payload: err.response.data.err,
    });
  }
};

export const addStudent = (data, clearInput) => async (dispatch) => {
  try {
    const errors = {};
    if (validator.isEmpty(data.registerNumber))
      errors.registerNumber = "Enter register number";
    if (validator.isEmpty(data.name)) errors.name = "Enter name";
    if (data.phone.length !== 10)
      errors.phone = "Phone number should be 10 digits";
    if (validator.isEmpty(data.phone)) errors.phone = "Enter your phone number";
    if (!validator.isEmail(data.parentEmail))
      errors.parentEmail = "Enter a valid email";
    if (validator.isEmpty(data.parentEmail))
      errors.parentEmail = "Enter parent email";
    if (validator.isEmpty(data.grade)) errors.grade = "Enter grade";
    if (validator.isEmpty(data.address)) errors.address = "Enter address";
    if (Object.keys(errors).length > 0) {
      throw errors;
    }
    dispatch({ type: ADD_STUDENT_LOADING });
    const res = await axios("admin").post("/admin/addstudent", data);
    dispatch({ type: ADD_STUDENT_SUCCESS, payload: res.data });
    clearInput();
    alert("Student added");
  } catch (err) {
    if (err.response) {
      dispatch({
        type: ADMIN_ERROR,
        payload: err.response.data.err,
      });
    } else {
      dispatch({
        type: ADMIN_ERROR,
        payload: err,
      });
    }
  }
};

export const fetchAttendance = (data) => async (dispatch) => {
  try {
    dispatch({ type: ATTENDANCE_FETCH_LOADING });
    const res = await axios("admin").post("/admin/fetchdata", data);
    dispatch({ type: ATTENDANCE_FETCH_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({
      type: ADMIN_ERROR,
      payload: err,
    });
  }
};
