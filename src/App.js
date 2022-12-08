import "./App.css";
import { useState } from "react";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";
function App() {
  const [changePageToSignup, setchangePageToSignup] = useState(false);
  const [changePageToSignin, setchangePageToSignin] = useState(false);
  function changetoSignupPage() {
    setchangePageToSignin(false);
    setchangePageToSignup((prev) => !prev);
  }
  function changetoSigninPage() {
    setchangePageToSignup(false);
    setchangePageToSignin((prev) => !prev);
  }
  let loginorSignup = <Login changetoSignupPage={changetoSignupPage} />;
  if (changePageToSignup) {
    loginorSignup = <Register changetoSigninPage={changetoSigninPage} />;
  } else if (changePageToSignin) {
    loginorSignup = <Login changetoSignupPage={changetoSignupPage} />;
  }
  return <div>{loginorSignup}</div>;
}

export default App;
