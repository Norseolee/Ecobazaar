import { Link } from "react-router-dom";

import "../CSS/Sign_up.css";
import { useState } from "react";

const Sign_up = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <>
      <div className="CraeteAccount_Base">
        <div className="CreateAccount_Form">
          <h1>Create Account</h1>
          <input type="email" className="Input_Design" placeholder="Email" />

          {/* Password Input */}
          <div className="PasswordInput">
            <input
              type={passwordVisible ? "text" : "password"}
              className="Input_Design"
              placeholder="Password"
            />
            <button className="Eye" onClick={togglePasswordVisibility}>
              {passwordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none">
                  <path
                    d="M1.66675 10.5003C1.66675 10.5003 4.69675 4.66699 10.0001 4.66699C15.3034 4.66699 18.3334 10.5003 18.3334 10.5003C18.3334 10.5003 15.3034 16.3337 10.0001 16.3337C4.69675 16.3337 1.66675 10.5003 1.66675 10.5003Z"
                    stroke="#4d4d4d"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 13C10.663 13 11.2989 12.7366 11.7678 12.2678C12.2366 11.7989 12.5 11.163 12.5 10.5C12.5 9.83696 12.2366 9.20107 11.7678 8.73223C11.2989 8.26339 10.663 8 10 8C9.33696 8 8.70107 8.26339 8.23223 8.73223C7.76339 9.20107 7.5 9.83696 7.5 10.5C7.5 11.163 7.76339 11.7989 8.23223 12.2678C8.70107 12.7366 9.33696 13 10 13V13Z"
                    stroke="#4d4d4d"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none">
                  <path
                    d="M1.66675 10.5C1.66675 10.5 4.69675 16.3337 10.0001 16.3337C15.3034 16.3337 18.3334 10.5 18.3334 10.5"
                    stroke="#4d4d4d"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="PasswordInput">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              className="Input_Design"
              placeholder="Confirm Password"
            />
            <button className="Eye" onClick={toggleConfirmPasswordVisibility}>
              {confirmPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none">
                  <path
                    d="M1.66675 10.5003C1.66675 10.5003 4.69675 4.66699 10.0001 4.66699C15.3034 4.66699 18.3334 10.5003 18.3334 10.5003C18.3334 10.5003 15.3034 16.3337 10.0001 16.3337C4.69675 16.3337 1.66675 10.5003 1.66675 10.5003Z"
                    stroke="#4d4d4d"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 13C10.663 13 11.2989 12.7366 11.7678 12.2678C12.2366 11.7989 12.5 11.163 12.5 10.5C12.5 9.83696 12.2366 9.20107 11.7678 8.73223C11.2989 8.26339 10.663 8 10 8C9.33696 8 8.70107 8.26339 8.23223 8.73223C7.76339 9.20107 7.5 9.83696 7.5 10.5C7.5 11.163 7.76339 11.7989 8.23223 12.2678C8.70107 12.7366 9.33696 13 10 13V13Z"
                    stroke="#4d4d4d"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none">
                  <path
                    d="M1.66675 10.5C1.66675 10.5 4.69675 16.3337 10.0001 16.3337C15.3034 16.3337 18.3334 10.5 18.3334 10.5"
                    stroke="#4d4d4d"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="Terms">
            <input type="checkbox" name="terms" id="terms" />
            <span className="Color_Gray">Accept all terms & Conditions</span>
          </div>

          <button className="Create_Account">Create Account</button>

          <p>
            Already have account{" "}
            <Link to="/sign-in">
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sign_up;
