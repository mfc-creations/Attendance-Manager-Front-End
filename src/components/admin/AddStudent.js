import React, { useState } from "react";
import { ReactComponent as Illustration } from "../../assets/password.svg";
import TextField from "../common/TextField";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { adminActions } from "../../redux/index";
import Spinner from "../common/spinner/Spinner";
import validator from "validator";

const AddStudent = () => {
  const [registerNumber, setRegisterNumber] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [grade, setGrade] = useState("");

  const { loading, errors } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const { addStudent } = bindActionCreators(adminActions, dispatch);

  const onAdd = async (e) => {
    e.preventDefault();
    await addStudent(
      {
        registerNumber,
        name,
        address,
        phone,
        parentEmail,
        grade,
      },
      clearInput
    );
  };
  const clearInput = () => {
    setRegisterNumber("");
    setName("");
    setPhone("");
    setAddress("");
    setParentEmail("");
    setGrade("");
  };

  return (
    <div className="login__page">
      <Illustration />
      <section>
        <h1>Add Student</h1>
        <TextField
          placeholder="Register Number"
          value={registerNumber}
          onChange={(e) => setRegisterNumber(e.target.value)}
          type="number"
          error={errors.registerNumber}
        />
        <TextField
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          error={errors.name}
        />

        <TextField
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          error={errors.phone}
        />
        <TextField
          placeholder="Parent Email Id"
          value={parentEmail}
          onChange={(e) => setParentEmail(e.target.value)}
          type="email"
          error={errors.parentEmail}
        />
        <TextField
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          type="text"
          error={errors.grade}
        />
        <TextField
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          error={errors.address}
        />
        {loading ? <Spinner /> : <button onClick={onAdd}>Submit</button>}
      </section>
    </div>
  );
};

export default AddStudent;
