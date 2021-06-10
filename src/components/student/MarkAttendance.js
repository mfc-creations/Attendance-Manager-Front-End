import React, { useEffect } from "react";
import { ReactComponent as Illustration } from "../../assets/attendance.svg";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { studentActions } from "../../redux/index";
import Spinner from "../common/spinner/Spinner";

const MarkAttendance = () => {
  const { loading, attendanceMarked, errors } = useSelector(
    (state) => state.student
  );
  const dispatch = useDispatch();
  const { checkAttendance, markAttendance } = bindActionCreators(
    studentActions,
    dispatch
  );

  const today = new Date();
  const date =
    today.getFullYear() +
    "-" +
    `${
      today.getMonth() + 1 < 10
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1
    }` +
    "-" +
    `${today.getDate() < 10 ? "0" + today.getDate() : today.getDate()}`;
  useEffect(() => {
    checkAttendance({ date });
  }, []);

  const onMarkAttendance = (e) => {
    e.preventDefault();
    markAttendance({ date });
  };

  return (
    <div className="login__page">
      <section>
        <h1>{date}</h1>

        {attendanceMarked ? (
          "Attendance Marked"
        ) : loading ? (
          <Spinner />
        ) : (
          <button className="attendance-btn" onClick={onMarkAttendance}>
            Mark Attendance
          </button>
        )}
      </section>
      <Illustration />
    </div>
  );
};

export default MarkAttendance;
