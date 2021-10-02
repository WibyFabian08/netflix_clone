import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { deleteUser } from "../redux/action/userAction";

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const TableUser = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userState);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const confirm = (id) => {
    confirmAlert({
      title: 'Confirm to Delete User',
      message: 'Are you sure to delete this user?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleDelete(id)
        },
        {
          label: 'No',
          onClick: () => console.log('no')
        }
      ]
    });
  }

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <div
              className="overflow-hidden bg-white rounded-full"
              style={{ width: 30, height: 30 }}
            >
              <img
                src={
                  params.row.profilePict
                    ? `http://localhost:3000${params.row.profilePict}`
                    : "/images/profile.png"
                }
                alt="avatar"
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="ml-2">{params.row.username}</h2>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <Link to={`/users/detail/${params.row._id}`}>
              <ModeEditOutlineOutlinedIcon
                style={{ color: "blue", marginRight: "5px" }}
              ></ModeEditOutlineOutlinedIcon>
            </Link>
            <DeleteOutlineIcon
              onClick={() => confirm(params.row._id)}
              style={{ color: "red", cursor: "pointer" }}
            ></DeleteOutlineIcon>
          </div>
        );
      },
    },
  ];

  if(users.length < 0) {
    return <div className="p-10">Loading...</div>
  }

  return (
    <div className="bg-white shadow-xl" style={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default TableUser;
