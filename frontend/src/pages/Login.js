import React from "react";
import { Link, useHistory } from "react-router-dom";

import { InputText, Button } from "../elements";
import { login } from "../redux/action/authAction";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const { formLogin } = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    dispatch({
      type: "SET_LOGIN_FORM",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formLogin, history));
  };

  return (
    <div className="relative flex items-center justify-center w-screen h-screen login-page">
      <img
        src="/images/nav-brand.png"
        className="absolute top-0 left-0 mx-5 w-36"
        alt="logo"
      />
      <div className="w-4/5 p-5 bg-black rounded-lg md:w-1/3">
        <h2 className="mb-5 text-2xl font-semibold text-white">Sign In</h2>
        <form
          action="POST"
          onSubmit={(e) => handleSubmit(e)}
          className="w-full"
        >
          <InputText
            type="text"
            placeholder="Email or Phone Number"
            value={formLogin?.email}
            onChange={(e) => handleChange(e)}
            name="email"
          ></InputText>
          <InputText
            type="password"
            placeholder="Password"
            value={formLogin?.password}
            onChange={(e) => handleChange(e)}
            name="password"
          ></InputText>
          <Button login type="submit">
            Sign In
          </Button>
        </form>
        <div className="mt-5 font-light text-white">
          New to Netflix?{" "}
          <Link to="/register" className="font-semibold">
            Sign up now.
          </Link>
        </div>
        <p className="mt-5 text-sm text-white text-light">
          This pages is protected by Google reCAPTCHA to ensure you're not a bot{" "}
          <span className="font-bold">Learn More</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
