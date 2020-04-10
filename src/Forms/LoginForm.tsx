import React, { useState } from "react";
import showErrorMessage from '../helpers/showErrorMessage';
import logo from "../images/GoF-black.svg";

const LoginForm = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const onFormSubmit = (event: any) => {
    event.preventDefault();
    email ? setEmailError(false) : setEmailError(true);
    password ? setPasswordError(false) : setPasswordError(true);
  };

  const onEmailChange = (event: any) => {
    setEmail(event.target.value)
  }

  const onPasswordChange = (event: any) => {
    setPassword(event.target.value)
  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <div className="logo d-flex justify-content-center align-items-center">
                <img src={logo} alt="" />
              </div>
            </div>

            <div className="col-md-12 d-flex justify-content-center mt-4">
              <h3 className="page-title">LOGIN</h3>
            </div>

            <div className="col-md-12 mt-3">
              <form id="login-form" onSubmit={onFormSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="E-mail"
                    value={email}
                    onChange={onEmailChange}
                  />
                </div>
                {emailError && showErrorMessage("email")}

                <div className="form-group mt-5">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={onPasswordChange}
                  />
                </div>
                {passwordError && showErrorMessage("password")}

                <button
                  type="submit"
                  id="login-button"
                  className="btn w-100 mt-4"
                >
                  LOGIN
								</button>
              </form>

              <span className="mt-3 d-flex justify-content-center info">
                Don't have account? Sign up &nbsp;
								<a href="signup.html">here.</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
