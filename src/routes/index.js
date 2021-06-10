import StudentLogin from "../components/student/Login";
import CreatePassword from "../components/student/CreatePassword";
import EnterPassword from "../components/student/EnterPassword";
import MarkAttendance from "../components/student/MarkAttendance";
import AddStudent from "../components/admin/AddStudent";
import AdminLogin from "../components/admin/Login";
import Attendance from "../components/admin/Attendance";

const routes = [
  {
    path: "/attendance",
    component: Attendance,
    title: "Attendance",
    needsAdminAuth: true,
  },
  {
    path: "/add-student",
    component: AddStudent,
    title: "Add Student",
    needsAdminAuth: true,
  },
  {
    path: "/admin-login",
    component: AdminLogin,
    title: "Admin Login",
    needsAuth: false,
  },
  {
    path: "/mark-attendance",
    component: MarkAttendance,
    title: "Mark Attendance",
    needsStudentAuth: true,
  },
  {
    path: "/enter-password",
    component: EnterPassword,
    title: "Enter Password",
    needsAuth: false,
  },
  {
    path: "/create-password",
    component: CreatePassword,
    title: "Create Password",
    needsAuth: false,
  },
  {
    path: "/",
    component: StudentLogin,
    title: "Register Number",
    needsAuth: false,
  },
];

export default routes;
