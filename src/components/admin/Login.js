import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "../common/TextField";
import { ReactComponent as Illustration } from "../../assets/login.svg";
import validator from "validator";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { adminActions } from "../../redux/index";
import Spinner from "../common/spinner/Spinner";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const { loading, errors } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const { login, fetchAttendance } = bindActionCreators(adminActions, dispatch);

  const onLogin = (e) => {
    e.preventDefault();
    login({ email, password }, history);
  };

  return (
    <div className="login__page">
      <section>
        <h1>Login Here</h1>
        <TextField
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          error={errors.email}
        />
        <TextField
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          error={errors.password}
        />
        {loading ? <Spinner /> : <button onClick={onLogin}>Submit</button>}
      </section>
      <Illustration />
    </div>
  );
};

export default Login;
