import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { saveUser } from "./saveUser";
const imageUrl =
  "https://upload.wikimedia.org/wikipedia/en/b/b4/Howard_Bison_logo.svg";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    const results = { email: email, password: password };

    const isMatch =
      results.email === saveUser.email &&
      results.password === saveUser.password;

    if (isMatch) {
      setSuccess(true);
      navigate("/chat");
    } else {
      setSuccess(false);
    }
  };

  useEffect(() => {
    console.log("Success", success);
  }, [success]);

  return (
    <>
      <div className="Centered">
        <div className="HeaderBox">
          <p className="BisonAdvisor">Bison Advisor</p>
        </div>

        <div className="Box">
          <div className="LogoContainer">
            <img src={imageUrl} alt="Howard Bison Logo" className="Logo" />
          </div>

          <form onSubmit={submitForm}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="loginbtn">
              <button className="loginbtn" type="submit">Login</button>
            </div>
          </form>
          <div className="signInLine">
            Aren't Registered?
            <a href="/register" className="Registerbtn">
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;