import React from "react";
import { Link } from "react-router-dom";

import { LoginForm } from "../Auth/LoginForm";
import { RegisterForm } from "../Auth/RegisterForm";

import "./index.css";

export const LandingPage = () => {
  const [loginModal, setLoginModal] = React.useState(false);
  const [signupModal, setSignupModal] = React.useState(false);
  const handleLoginModal = () => setLoginModal(true);
  const handleLoginClose = () => setLoginModal(false);

  const handleSignupModal = () => setSignupModal(true);
  const handleSignupClose = () => setSignupModal(false);

  return (
    <>
      <div className="landingPage">
        <div className="landingPage-content">
          <h1>Welcome to Replica</h1>
          <div className="landingPage-link flex flex-col md:flex-row">
            <Link className="login pointer" onClick={handleLoginModal}>
              Login
            </Link>
            <LoginForm
              loginModal={loginModal}
              handleLoginClose={handleLoginClose}
            />
            <Link
              className="regBtn pointer mt-10 md:mt-0"
              onClick={handleSignupModal}
            >
              Register
            </Link>
            <RegisterForm
              signupModal={signupModal}
              handleSignupClose={handleSignupClose}
            />
          </div>
        </div>
      </div>
    </>
  );
};
