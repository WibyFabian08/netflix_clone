import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'

import { DataGrid } from "@mui/x-data-grid";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const ListContent = ({ handleDelete }) => {
  const { listContent } = useSelector((state) => state.listState);

  const confirm = (id) => {
    confirmAlert({
      title: 'Confirm to Delete Movie',
      message: 'Are you sure to delete this movie from list?',
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
    { field: "_id", headerName: "Movie ID", width: 250 },

    {
      field: "title",
      headerName: "Title",
      width: 250,
    },
    {
      field: "image",
      headerName: "Image",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <div
              className="overflow-hidden bg-white"
              style={{ width: 50, height: 50 }}
            >
              <img
                src={`http://localhost:3000${params.row.image}`}
                alt="avatar"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        );
      },
    },
    {
      field: "desc",
      headerName: "Sinopsis",
      width: 250,
    },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <Link to={`/movie/detail/${params.row._id}`}>
              <RemoveRedEyeOutlinedIcon
                style={{ color: "green", cursor: "pointer", marginRight: "5px" }}
              ></RemoveRedEyeOutlinedIcon>
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

  if(listContent === null) {
    return <div className="p-10">Loading....</div>
  }

  return (
    <div className="bg-white shadow-xl" style={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={listContent && listContent?.movieId}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default ListContent;
