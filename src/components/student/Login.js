import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "../common/TextField";
import { ReactComponent as Illustration } from "../../assets/login.svg";
import validator from "validator";
import "./Style.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { studentActions } from "../../redux/index";
import Spinner from "../common/spinner/Spinner";

const Login = () => {
  const [registerNumber, setRegisterNumber] = useState("");

  const history = useHistory();

  const { loading, errors } = useSelector((state) => state.student);
  const dispatch = useDispatch();
  const { checkRegisterNumber } = bindActionCreators(studentActions, dispatch);

  const onSubmit = (e) => {
    e.preventDefault();
    checkRegisterNumber({ registerNumber }, history);
  };
  return (
    <div className="login__page">
      <section>
        <h1>Login to Mark Attendance</h1>
        <TextField
          placeholder="Register Number"
          value={registerNumber}
          onChange={(e) => setRegisterNumber(e.target.value)}
          type="number"
          error={errors.registerNumber}
        />
        {loading ? (
          <Spinner />
        ) : (
          <button
            disabled={validator.isEmpty(registerNumber)}
            onClick={onSubmit}
          >
            Submit
          </button>
        )}
      </section>
      <Illustration />
    </div>
  );
};

export default Login;
