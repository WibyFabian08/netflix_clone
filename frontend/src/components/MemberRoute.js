import React from "react";
import { withRouter, Route, Redirect } from "react-router-dom";

const MemberRoute = ({ component: Component, location, ...rest }) => {
  const isAuth = localStorage.getItem("user");
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to={"/login"}></Redirect>
        )
      }
    ></Route>
  );
};

export default withRouter(MemberRoute);
