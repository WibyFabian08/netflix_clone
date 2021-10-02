import React from "react";
import { withRouter, Route, Redirect } from "react-router-dom";

const GuestRoute = ({ component: Component, location, ...rest }) => {
  const isAuth = localStorage.getItem("user");

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Redirect to={"/"}></Redirect>
        ) : (
          <Component {...props}></Component>
        )
      }
    ></Route>
  );
};

export default withRouter(GuestRoute);
