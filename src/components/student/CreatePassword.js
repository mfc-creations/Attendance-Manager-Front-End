import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Illustration } from "../../assets/password.svg";
import TextField from "../common/TextField";
import validator from "validator";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { studentActions } from "../../redux/index";
import Spinner from "../common/spinner/Spinner";

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();

  const { loading, registerNumber, errors } = useSelector(
    (state) => state.student
  );
  const dispatch = useDispatch();
  const { createPassword } = bindActionCreators(studentActions, dispatch);

  const onSubmit = (e) => {
    e.preventDefault();
    if (registerNumber === 0) alert("Enter register number first");
    else createPassword({ registerNumber: registerNumber, password }, history);
  };

  return (
    <div className="login__page">
      <Illustration />
      <section>
        <h1>Create Password to Secure Your Account</h1>
        <TextField
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <TextField
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
        />
        {loading ? (
          <Spinner />
        ) : (
          <button
            onClick={onSubmit}
            disabled={
              validator.isEmpty(password) || confirmPassword !== password
            }
          >
            Submit
          </button>
        )}
      </section>
    </div>
  );
};

export default CreatePassword;
