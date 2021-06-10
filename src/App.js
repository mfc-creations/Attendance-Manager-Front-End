import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import routes from "./routes";
import Header from "./components/header/Header";

const RenderRoute = (route) => {
  const history = useHistory();

  document.title = route.title || "Attendance Manager";
  if (
    (route.needsAdminAuth && !localStorage.admin) ||
    (route.needsStudentAuth && !localStorage.student)
  ) {
    history.push("/");
  }
  return (
    <Route
      path={route.path}
      exact
      render={(props) => <route.component {...props} />}
    ></Route>
  );
};

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          {routes.map((route, index) => (
            <RenderRoute {...route} key={index} />
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
