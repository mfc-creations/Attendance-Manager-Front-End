import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "../common/TextField";
import "./Style.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { adminActions } from "../../redux/index";
import Spinner from "../common/spinner/Spinner";

const Attendance = () => {
  const [date, setDate] = useState();
  const today = new Date();
  const currDate =
    today.getFullYear() +
    "-" +
    `${
      today.getMonth() + 1 < 10
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1
    }` +
    "-" +
    `${today.getDate() < 10 ? "0" + today.getDate() : today.getDate()}`;

  const { loading, data, errors } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const { fetchAttendance } = bindActionCreators(adminActions, dispatch);

  useEffect(() => {
    console.log("edo", date, currDate);
    if (date) fetchAttendance({ date });
    else fetchAttendance({ date: currDate });
  }, [date]);

  return (
    <div className="attendance__page">
      <TextField type="date" onChange={(e) => setDate(e.target.value)} />
      {loading ? (
        <Spinner />
      ) : data.length === 0 ? (
        <h2 style={{ margin: "auto" }}>Noone Marked Today's Attendance</h2>
      ) : (
        <table className="attendance__table">
          <thead>
            <th>No</th>
            <th>Name</th>
            <th>Reg.No</th>
            <th>Phone</th>
            <th>Parent Email</th>
            <th>Address</th>
            <th>Grade</th>
            <th>Attendance</th>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.student.name}</td>
                <td>{item.student.registerNumber}</td>
                <td>{item.student.phone}</td>
                <td>{item.student.parentEmail}</td>
                <td>{item.student.address}</td>
                <td>{item.student.grade}</td>
                <td>{item.present ? "Present" : "Absent"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link to="/add-student">
        {" "}
        <div className="fab">+</div>
      </Link>
    </div>
  );
};

export default Attendance;
