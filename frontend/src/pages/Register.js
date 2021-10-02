import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Button, InputText } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/action/authAction";

const Register = () => {
  const {formRegister} = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [showUsername, setShowUsername] = useState(false);

  const handleChange = (e) => {
    dispatch({type: 'SET_REGISTER_FORM', name: e.target.name, value: e.target.value})
    
  };

  const handleShowPassword = () => {
    setShowPassword(true);
  };

  const handleShowUsername = () => {
    setShowUsername(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formRegister, history))
  };

  return (
    <div className="relative flex items-center justify-center w-screen h-screen register-page">
      <div className="absolute top-0 left-0 flex items-center justify-between w-full px-10">
        <img src="/images/nav-brand.png" className="w-36" alt="logo" />
        <Button signin>Login</Button>
      </div>
      <div className="px-5 text-center md:px-0">
        <h2 className="text-3xl font-semibold text-white md:text-6xl">
          Unlimited moveis, TV <br /> shows, and more.{" "}
        </h2>
        <h2 className="my-5 font-semibold text-white text-md md:text-xl">
          Watch anywhere, Cancle anytime.
        </h2>
        <p className="mb-5 text-white">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form
          action="POST"
          onSubmit={(e) => handleSubmit(e)}
          className="flex items-center w-full mx-auto"
        >
          {!showUsername && (
            <>
              <InputText
                placeholder="Email Address"
                register
                type="text"
                name="email"
                value={formRegister.email}
                onChange={(e) => handleChange(e)}
              ></InputText>
              <Button register type="button" onClick={() => handleShowUsername()}>
                Get Started
              </Button>
            </>
          )}
          {
            showUsername && !showPassword && (
              <>
              <InputText
                placeholder="Username"
                register
                type="text"
                name="username"
                value={formRegister.username}
                onChange={(e) => handleChange(e)}
              ></InputText>
              <Button register type="button" onClick={() => handleShowPassword()}>
                Next
              </Button>
              </>
            )
          }
          {showPassword && (
            <>
              <InputText
                placeholder="Password"
                value={formRegister.password}
                onChange={(e) => handleChange(e)}
                register
                type="password"
                name="password"
              ></InputText>
              <Button register type="submit">
                Sign Up
              </Button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
