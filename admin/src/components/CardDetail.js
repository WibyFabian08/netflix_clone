import React from "react";

import { Chart } from "../components";
import productStat from "../data/productStat.json";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MyLocationIcon from "@mui/icons-material/MyLocation";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

const CardDetail = ({ user, movie, statistik, data }) => {
  if (statistik) {
    return (
      <>
        <h2 className="font-semibold">Sales per Month</h2>
        <Chart data={productStat} dataKey="Sales"></Chart>
      </>
    );
  }
  if (user) {
    return (
      <>
        <div className="flex items-center">
          <div
            className="overflow-hidden bg-white rounded-full"
            style={{ width: 40, height: 40 }}
          >
            <img
              src={
                data
                  ? `http://localhost:3000${data?.profilePict}`
                  : "/images/profile.png"
              }
              alt="profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="ml-2">
            <h2 className="font-semibold capitalize">
              {data ? data?.username : "username"}
            </h2>
          </div>
        </div>
        <div className="mt-5 truncate ...">
          <div className="mb-5">
            <p className="text-sm text-gray-400">Account Detail</p>
            <ul className="my-2">
              <li className="flex items-center mb-2">
                <PermIdentityIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></PermIdentityIcon>
                <p className="ml-2 text-sm">
                  {data ? data?.username : "username"}
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-gray-400">Contact Detail</p>
            <ul className="my-2">
              <li className="flex items-center mb-2">
                <MailOutlineIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></MailOutlineIcon>
                <p className="ml-2 text-sm">{data ? data?.email : "email"}</p>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }

  if (movie) {
    return (
      <>
        <div className="flex items-center">
          <div
            className="overflow-hidden bg-white rounded-full"
            style={{ width: 40, height: 40 }}
          >
            <img
              src={
                data
                  ? `http://localhost:3000${data?.image}`
                  : "/images/profile.png"
              }
              alt="profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="ml-2">
            <h2 className="font-semibold">{data && data?.title}</h2>
          </div>
        </div>
        <div className="mt-5 truncate ...">
          <div className="mb-5">
            <p className="text-sm text-gray-400">{data && data?.genre}</p>
            <ul className="my-2">
              <li className="flex items-center mb-2">
                <FormatListNumberedIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></FormatListNumberedIcon>
                <p className="ml-2 text-sm">{data && data?.year}</p>
              </li>
              <li className="flex items-center mb-2">
                <TrendingUpIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></TrendingUpIcon>
                <p className="ml-2 text-sm">
                  {data && data?.isSeries ? "Series" : "Movie"}
                </p>
              </li>
              <li className="flex items-center mb-2">
                <EventAvailableIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></EventAvailableIcon>
                <p className="ml-2 text-sm">{data && data?.limit} + </p>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex items-center">
        <div
          className="overflow-hidden bg-white rounded-full"
          style={{ width: 40, height: 40 }}
        >
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="ml-2">
          <h2 className="font-semibold">Wiby Fabian Rianto</h2>
          <p className="text-sm text-gray-400">Software Engineer</p>
        </div>
      </div>
      <div className="mt-5 truncate ...">
        <div className="mb-5">
          <p className="text-sm text-gray-400">Account Detail</p>
          <ul className="my-2">
            <li className="flex items-center mb-2">
              <PermIdentityIcon
                style={{ color: "#555555" }}
                fontSize="small"
              ></PermIdentityIcon>
              <p className="ml-2 text-sm">Wiby Fabian Rianto</p>
            </li>
            <li className="flex items-center">
              <CalendarTodayIcon
                style={{ color: "#555555" }}
                fontSize="small"
              ></CalendarTodayIcon>
              <p className="ml-2 text-sm">19-12-1998</p>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-gray-400">Contact Detail</p>
          <ul className="my-2">
            <li className="flex items-center mb-2">
              <PhoneIcon
                style={{ color: "#555555" }}
                fontSize="small"
              ></PhoneIcon>
              <p className="ml-2 text-sm">089663191201</p>
            </li>
            <li className="flex items-center mb-2">
              <MailOutlineIcon
                style={{ color: "#555555" }}
                fontSize="small"
              ></MailOutlineIcon>
              <p className="ml-2 text-sm">wibyfabian08@gmail.com</p>
            </li>
            <li className="flex items-center">
              <MyLocationIcon
                style={{ color: "#555555" }}
                fontSize="small"
              ></MyLocationIcon>
              <p className="ml-2 text-sm">Garut | Indonesia</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
