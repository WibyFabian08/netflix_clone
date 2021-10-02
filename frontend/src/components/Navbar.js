import React, { useState, useEffect } from "react";

import { Link, useHistory, withRouter } from "react-router-dom";

import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/action/authAction";
import { getUser } from "../redux/action/userAction";

const Navbar = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const { user } = useSelector((state) => state.userState);
  const name = user && user.username.split(" ")[0];

  const handleLogOut = () => {
    dispatch(logout(history));
  };

  const getNavLink = (path) => {
    return path === match.path ? "font-bold" : "";
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);

    return () => (window.onscroll = null);
  };

  useEffect(() => {
    dispatch(getUser());

    return () => {
      dispatch({ type: "SET_USER", value: null });
    };
  }, [dispatch]);

  return (
    <div
      className={[
        "fixed top-0 z-50 w-full transition-all duration-700 ease-linear",
        isScrolled ? "nav-dark" : "navbar",
      ].join(" ")}
    >
      <div className="container px-5 mx-auto md:px-10">
        <div
          className="flex items-center justify-between"
          style={{ hieght: 80 }}
        >
          <div className="flex items-center">
            <img src="/images/nav-brand.png" className="w-36" alt="logo" />
            <div className="hidden md:block">
              <ul className="flex items-center ml-5">
                <li className="mx-3">
                  <Link
                    to="/"
                    className={[
                      "text-sm text-white hover:underline",
                      getNavLink("/"),
                    ].join(" ")}
                  >
                    Homepage
                  </Link>
                </li>
                <li className="mx-3">
                  <Link
                    to="/series"
                    className={[
                      "text-sm text-white hover:underline",
                      getNavLink("/series"),
                    ].join(" ")}
                  >
                    Series
                  </Link>
                </li>
                <li className="mx-3">
                  <Link
                    to="/movie"
                    className={[
                      "text-sm text-white hover:underline",
                      getNavLink("/movie"),
                    ].join(" ")}
                  >
                    Movies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul className="flex items-center ml-5">
              <li className="mx-2">
                <SearchIcon style={{ color: "white" }}></SearchIcon>
              </li>
              <li className="mx-2 text-white">{name ? name : "ID"}</li>
              <li className="mx-2">
                <NotificationsIcon
                  style={{ color: "white" }}
                ></NotificationsIcon>
              </li>
              <li className="mx-2">
                <div
                  className="overflow-hidden bg-white rounded-full"
                  style={{ height: 40, width: 40 }}
                >
                  <img
                    src={
                      user ? `http://localhost:3000${user?.profilePict}` : ""
                    }
                    className="object-cover w-full h-full"
                    alt="profile"
                  />
                </div>
              </li>
              <li
                className="relative mx-2"
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
              >
                <ArrowDropDownIcon
                  style={{ color: "white", cursor: "pointer" }}
                ></ArrowDropDownIcon>
                <div
                  className="absolute right-0 p-2 transition-all duration-300 bg-black border border-gray-300 border-solid rounded-lg"
                  style={{
                    transform: showMenu ? "scale(1)" : "scale(0)",
                  }}
                >
                  <div className="py-2 pr-5">
                    <Link to="#" className="text-white hover:underline ">
                      Setting
                    </Link>
                  </div>
                  <div className="py-2 pr-5">
                    <p
                      className="text-white hover:underline"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleLogOut()}
                    >
                      SignOut
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
