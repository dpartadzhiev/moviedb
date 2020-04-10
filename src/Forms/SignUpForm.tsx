import React, { useState } from "react";
import showErrorMessage from '../helpers/showErrorMessage';
import logo from "../images/GoF-black.svg";

const SignUpForm = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false);

  const onFormSubmit = (event: any) => {
    event.preventDefault();

    email ? setEmailError(false) : setEmailError(true);
    password ? setPasswordError(false) : setPasswordError(true);
    confirmPassword ? setConfirmPasswordError(false) : setConfirmPasswordError(true);
  };

  const onEmailChange = (event: any) => {
    setEmail(event.target.value)
  }

  const onPasswordChange = (event: any) => {
    setPassword(event.target.value)
  }

  const onConfirmPasswordChange = (event: any) => {
    setConfirmPassword(event.target.value)
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
              <h3 className="page-title">SIGN UP</h3>
            </div>

            <div className="col-md-12 mt-3">
              <form onSubmit={onFormSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    value={email}
                    placeholder="E-mail"
                    onChange={onEmailChange}
                  />
                </div>
                {emailError && showErrorMessage("email")}

                <div className="form-group mt-5">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    value={password}
                    placeholder="Password"
                    onChange={onPasswordChange}
                  />
                </div>
                {passwordError && showErrorMessage("password")}

                <div className="form-group mt-5">
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    id="confirmPassword"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={onConfirmPasswordChange}
                  />
                </div>
                {confirmPasswordError && showErrorMessage("password")}

                <button
                  type="submit"
                  id="signup-button"
                  className="btn w-100 mt-4"
                >
                  SIGN UP
								</button>
              </form>

              <span className="mt-3 d-flex justify-content-center info">
                Already have account? Login &nbsp;<a href="login.html">here.</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;