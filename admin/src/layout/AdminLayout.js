import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import { Navbar } from "../components";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StorefrontIcon from "@mui/icons-material/Storefront";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AdminLayout = ({ children, match }) => {
  const [left, setLeft] = useState(800);
  const [toggleMenu, setTogglemenu] = useState(false);

  const updateWidth = () => {
    setLeft(window.innerWidth);
  };

  const getNavLink = (path) => {
    return match.path === path ? "bg-gray-200" : "";
  };

  const closeSidebar = () => {
    setTogglemenu(false);
    setTogglemenu(true);
    setLeft(-300);
    setTogglemenu(false);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const LEFT = left < 770 && !toggleMenu ? -300 : 0;

  return (
    <section className="relative flex w-full">
      <div
        className="absolute z-20 h-screen overflow-y-auto transition-all duration-300 ease-in-out md:relative bg-gray-50 admin-sidebar"
        style={{ left: LEFT, width: "300px" }}
      >
        <div
          className="absolute right-0 block px-2 py-2 bg-indigo-800 rounded-l-full top-1/2 md:hidden "
          style={{ cursor: "pointer" }}
          onClick={() => closeSidebar()}
        >
          <ArrowBackIosNewIcon
            style={{ color: "white" }}
            fontSize="small"
          ></ArrowBackIosNewIcon>
        </div>
        <div className="flex flex-col p-5">
          <div className="mb-3">
            <p className="text-sm font-bold text-gray-100">Dashboard</p>
            <ul className="px-2 py-1">
              <li
                className={[
                  "flex items-center w-full px-2 py-1 rounded-xl hover:bg-gray-200",
                  getNavLink("/"),
                ].join(" ")}
              >
                <HomeOutlinedIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></HomeOutlinedIcon>
                <Link className="ml-1 text-gray-700" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-3">
            <p className="text-sm font-bold text-gray-100">Quick Menu</p>
            <ul className="px-2 py-1">
              <li
                className={[
                  "flex items-center w-full px-2 py-1 rounded-xl hover:bg-gray-200",
                  getNavLink("/users"),
                  getNavLink("/users/create"),
                  getNavLink("/users/detail/:id"),
                ].join(" ")}
              >
                <PersonOutlineIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></PersonOutlineIcon>
                <Link className="ml-1 text-gray-700" to="/users">
                  Users
                </Link>
              </li>
              <li
                className={[
                  "flex items-center w-full px-2 py-1 rounded-xl hover:bg-gray-200",
                  getNavLink("/movie"),
                  getNavLink("/movie/create"),
                  getNavLink("/movie/detail/:id"),
                ].join(" ")}
              >
                <StorefrontIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></StorefrontIcon>
                <Link className="ml-1 text-gray-700" to="/movie">
                  Movies
                </Link>
              </li>
              <li
                className={[
                  "flex items-center w-full px-2 py-1 rounded-xl hover:bg-gray-200",
                  getNavLink("/list"),
                  getNavLink("/list/:id/edit"),
                  getNavLink("/list/content/:id"),
                  getNavLink("/list/create"),
                ].join(" ")}
              >
                <BarChartIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></BarChartIcon>
                <Link className="ml-1 text-gray-700" to="/list">
                  Lists
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative w-full h-screen overflow-x-hidden overflow-y-auto bg-gray-200 md:w-4/5">
        <div
          className="fixed left-0 z-10 block px-2 py-2 bg-indigo-800 rounded-r-full top-1/2 md:hidden "
          style={{ cursor: "pointer" }}
          onClick={() => setTogglemenu(!toggleMenu)}
        >
          <ArrowForwardIosIcon
            style={{ color: "white" }}
            fontSize="small"
          ></ArrowForwardIosIcon>
        </div>
        <Navbar></Navbar>
        <div className="p-5">{children}</div>
      </div>
    </section>
  );
};

export default withRouter(AdminLayout);
