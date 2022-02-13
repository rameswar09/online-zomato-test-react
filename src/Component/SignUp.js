import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAuthAction } from "../store/action";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpMsg = useSelector((state) => state.userAuth.signUpMsg);
  const dispatch = useDispatch();
  const history = useHistory();

  const nameHandler = (event) => {
    setUserName(event.target.value);
  };
  const emailHandler = (event) => {
    setUserEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const signUpHandler = () => {
    console.log({
      userName,
      userEmail,
      password,
    });
    setUserName("");
    setPassword("");
    setUserEmail("");
    dispatch(userAuthAction.updateSignUpMsg("This is worng macha "));
    history.push("/login");
  };
  return (
    
    <Fragment>
      <div>SignUp</div>
      {signUpMsg ? <div style={{ color: "red" }}>{signUpMsg}</div> : null}
      User Name:
      <input type="text" onChange={nameHandler} value={userName} />
      User Email:
      <input type="text" onChange={emailHandler} value={userEmail} />
      Password:
      <input type="password" onChange={passwordHandler} value={password} />
      <button onClick={signUpHandler}>Sign Up</button>
    </Fragment>
  );
};

export default SignUp;
