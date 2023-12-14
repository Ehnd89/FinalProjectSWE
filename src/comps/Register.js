import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { newuser } from "./saveUser.js";

const imageUrl =
  "https://upload.wikimedia.org/wikipedia/en/b/b4/Howard_Bison_logo.svg";

export function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [passworderror, setPassworderror] = useState(false);
  const [emailerror, setEmailerror] = useState(false);

  const isValidEmail = (email) => {
    // Simple email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  useEffect(() => {
    if (!isValidEmail(email)) {
      setEmailerror(true);
    } else {
      setEmailerror(false);
    }
  }, [email]);

  useEffect(() => {
    if (password.length >= 8 && /\d/.test(password) && /[A-Z]/.test(password)) {
      setPassworderror(false);
    } else {
      setPassworderror(true);
    }
    console.log({ passworderror });
  }, [password]);

  const user = newuser;

  //   var testObject = { one: 1, two: 2, three: 3 };

  //   // Put the object into storage
  //   localStorage.setItem("testObject", JSON.stringify(testObject));

  const submitForm = async (e) => {
    e.preventDefault();

    if (!passworderror && !emailerror) {
      user.email = email;
      user.name = name;
      user.password = password;
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/setup", { state: user });
    }

    console.log("newSUer", newuser);
  };

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

            {emailerror && email.length != 0 && <div>Enter a Email</div>}

            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {passworderror && password.length != 0 && (
              <div>password too short</div>
            )}

            <div className="registerbtn">
              <button className="regbtn" type="submit">
                Register
              </button>
            </div>
          </form>
          <div className="signInLine">
            Already Registered?
            <a href="/login" className="Loginbtn">
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}