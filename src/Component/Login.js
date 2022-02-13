import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const loginMsg = useSelector((state) => state.userAuth.loginMsg);
  return (
    <Fragment>
      {loginMsg ? <div>{loginMsg}</div> : null}
      <div></div>
    </Fragment>
  );
};
export default Login;
