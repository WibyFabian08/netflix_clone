import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const List = ({ handleDelete }) => {
  const { lists } = useSelector((state) => state.listState);

  const confirm = (id) => {
    confirmAlert({
      title: "Confirm to Delete List",
      message: "Are you sure to delete this list?",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleDelete(id),
        },
        {
          label: "No",
          onClick: () => console.log("no"),
        },
      ],
    });
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },

    {
      field: "title",
      headerName: "Title",
      width: 250,
    },
    {
      field: "genre",
      headerName: "Genre",
      width: 250,
    },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <Link to={`/list/${params.row._id}/edit`}>
              <ModeEditOutlineOutlinedIcon
                style={{ color: "blue", marginRight: "5px" }}
              ></ModeEditOutlineOutlinedIcon>
            </Link>
            <DeleteOutlineIcon
              onClick={() => confirm(params.row._id)}
              style={{ color: "red", cursor: "pointer" }}
            ></DeleteOutlineIcon>
            <Link to={`/list/content/${params.row._id}`}>
              <RemoveRedEyeOutlinedIcon
                style={{ color: "green", cursor: "pointer", marginLeft: "5px" }}
              ></RemoveRedEyeOutlinedIcon>
            </Link>
          </div>
        );
      },
    },
  ];

  if(lists.length < 0) {
    return <div className="p-10">Loading...</div>
  }

  return (
    <div className="bg-white shadow-xl" style={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={lists}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default List;
