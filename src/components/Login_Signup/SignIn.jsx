import { React, useState, useEffect } from "react";
import "../../css/Login_Signup/sign.css";
import "../../css/Login_Signup/login.css";
import Details from "./Details";
import login1 from "../../images/login1.png";
import { Link, Redirect } from "react-router-dom";
import eye from "../../images/eye.png";

export default function SignIn() {
  const [userErr, setUserErr] = useState();
  const [eyeImg, setEyeImg] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resData, upateResdata] = useState(false);
  const [isLoggedIn, updateIsLoggedIn] = useState(false);
  // const history = useHistory();

  const token = localStorage.getItem("user-info");
  let loggedIn = true;
  if (token == null) {
    loggedIn = false;
  }
  useEffect(() => {
    let url = "http://localhost:4000/login/";
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((resp) => {
        upateResdata(resp);
      });
    });
  }, []);

  function login() {
    var flag = false;
    if (resData.length !== 0) {
      for (let i = 0; i < resData.length; i++) {
        if (resData[i].email === email) {
          if (resData[i].password === password) {
            updateIsLoggedIn(true);
            flag = true;
            let data = (resData[i].email, resData[i].password);
            localStorage.setItem("user-info", JSON.stringify(data));
          }
        }
      }
      if (flag === false) {
        // alert("Not Registred");
        setUserErr("your email address or password is not correct");
      }
    } else {
      alert("Data Not Found");
    }
    console.log("res Data", resData);
  }

  function formHandler(e) {
    e.preventDefault();
  }

  return (
    <>
      {loggedIn ? <Redirect to="/home" /> : <Redirect to="/" />}
      {isLoggedIn ? <Redirect to="/home" /> : null}

      <section className="login">
        <div className="img"></div>
        <div className="earth-block"></div>
        <div className="center">
          <div className="leftSide">
            <Details />
            <div className="alreadySign">
              <p> Don't have an account?</p>
              <Link className="signupLink" to="/signup">
                {" "}
                Sign Up
              </Link>
            </div>
          </div>

          <div className="rightSide">
            <div className="sign">
              <img src={login1} alt="loginImage" />
              <h2>Sign In</h2>
              <form onSubmit={formHandler}>
                <input
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  onFocus={() => {
                    setUserErr(true);
                  }}
                />
                <input
                  type={eyeImg ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  onFocus={() => {
                    setUserErr(true);
                  }}
                />
                <img
                  src={eye}
                  alt="eyeImage"
                  onClick={() => setEyeImg(!eyeImg)}
                  style={{
                    width: "3.5rem",
                    marginTop: "-3.2rem",
                    marginLeft: "31rem",
                    cursor: "pointer",
                  }}
                />
                {userErr ? (
                  <>
                    <span style={{ color: "red", fontSize: "1.5rem" }}>
                      {userErr}
                    </span>
                  </>
                ) : null}
                <button className="signbtn" type="submit" onClick={login}>
                  SIGN IN
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
