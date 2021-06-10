import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  ATTENDANCE_FETCH_LOADING,
  ATTENDANCE_FETCH_SUCCESS,
  ADD_STUDENT_LOADING,
  ADD_STUDENT_SUCCESS,
  ADMIN_ERROR,
} from "../actions/types";

const initialState = {
  loading: false,
  errors: {},
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADD_STUDENT_LOADING:
      return {
        ...state,
        errors: {},
        loading: true,
      };
    case ADD_STUDENT_SUCCESS:
      return {
        ...state,
        errors: {},
        loading: false,
      };
    case ADMIN_ERROR:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };
    case ATTENDANCE_FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ATTENDANCE_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
