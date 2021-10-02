import React from "react";

import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-xl">
      <div className="flex items-center justify-between px-5 py-5">
        <div>
            <h2 className="text-2xl font-bold text-indigo-800">UwebAdmin</h2>
        </div>
        <div className="flex items-center">
          <div className="relative mx-1">
            <div
              className="absolute top-0 right-0 text-xs text-center text-white bg-red-600 rounded-full"
              style={{ width: 15, height: 15 }}
            >
              2
            </div>
            <NotificationsNoneOutlinedIcon
              style={{ color: "#555555" }}
            ></NotificationsNoneOutlinedIcon>
          </div>
          <div className="relative mx-1">
            <div
              className="absolute top-0 right-0 text-xs text-center text-white bg-red-600 rounded-full"
              style={{ width: 15, height: 15 }}
            >
              2
            </div>
            <LanguageIcon
              style={{ color: "#555555" }}
            ></LanguageIcon>
          </div>
          <div className="relative mx-1">
            <SettingsIcon
              style={{ color: "#555555" }}
            ></SettingsIcon>
          </div>
          <div className="mx-1 overflow-hidden bg-white rounded-full" style={{height: 40, width: 40}}>
            <img src="/images/profile.jpg" className="object-cover w-full h-full" alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
