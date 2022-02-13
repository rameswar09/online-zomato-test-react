import { useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";

const Main = () => {
  const history = useHistory();
  const user = localStorage.getItem("user");
  if (!user) {
    history.push("/login");
  }

  return (
    <div>
      <Header />
      <div>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </div>
    </div>
  );
};

export default Main;
