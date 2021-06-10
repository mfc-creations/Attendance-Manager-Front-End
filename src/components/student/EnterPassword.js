import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Illustration } from "../../assets/password.svg";
import TextField from "../common/TextField";
import validator from "validator";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { studentActions } from "../../redux/index";
import Spinner from "../common/spinner/Spinner";

const EnterPassword = () => {
  const [password, setPassword] = useState("");

  const history = useHistory();

  const { loading, registerNumber, errors } = useSelector(
    (state) => state.student
  );
  const dispatch = useDispatch();
  const { checkPassword } = bindActionCreators(studentActions, dispatch);

  const onSubmit = (e) => {
    e.preventDefault();
    if (registerNumber === 0) alert("Enter register number first");
    else checkPassword({ registerNumber, password }, history);
  };

  return (
    <div className="login__page">
      <Illustration />
      <section>
        <h1>Enter Password</h1>
        <TextField
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        {loading ? (
          <Spinner />
        ) : (
          <button disabled={validator.isEmpty(password)} onClick={onSubmit}>
            Submit
          </button>
        )}
      </section>
    </div>
  );
};

export default EnterPassword;
