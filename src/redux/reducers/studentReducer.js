import {
  PASSWORD_LOADING,
  PASSWORD_SUCCESS,
  REGISTER_NUMBER_LOADING,
  REGISTER_NUMBER_SUCCESS,
  MARK_ATTENDANCE_LOADING,
  MARK_ATTENDANCE_SUCCESS,
  CHECK_ATTENDANCE_LOADING,
  CHECK_ATTENDANCE_SUCCESS,
  STUDENT_ERROR,
} from "../actions/types";
const initialState = {
  loading: false,
  errors: {},
  registerNumber: 0,
  attendanceMarked: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_NUMBER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_NUMBER_SUCCESS:
      return {
        ...state,
        errors: {},
        loading: false,
        registerNumber: action.payload.registerNumber,
      };
    case PASSWORD_LOADING:
      return {
        ...state,
        errors: {},
        loading: true,
      };
    case PASSWORD_SUCCESS:
      return {
        ...state,
        errors: {},
        loading: false,
      };

    case MARK_ATTENDANCE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case MARK_ATTENDANCE_SUCCESS:
      return {
        ...state,
        loading: false,
        attendanceMarked: true,
      };
    case CHECK_ATTENDANCE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CHECK_ATTENDANCE_SUCCESS:
      return {
        ...state,
        loading: false,
        attendanceMarked: action.payload.data.present,
      };
    case STUDENT_ERROR:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
