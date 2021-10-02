import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const TableMovie = ({handleDeleteMovie}) => {
  const { movies } = useSelector((state) => state.movieState);

  const confirm = (id) => {
    confirmAlert({
      title: 'Confirm to Delete Movie',
      message: 'Are you sure to delete this movie?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleDeleteMovie(id)
        },
        {
          label: 'No',
          onClick: () => console.log('no')
        }
      ]
    });
  }

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "title",
      headerName: "Movie",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <div
              className="overflow-hidden bg-white rounded-full"
              style={{ width: 30, height: 30 }}
            >
              <img
                src={`http://localhost:3000${params.row.image}`}
                alt="avatar"
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="ml-2">{params.row.title}</h2>
          </div>
        );
      },
    },
    {
      field: "limit",
      headerName: "Limit",
      width: 130,
      renderCell: (params) => {
        return (
          <p>{params.row.limit} years old</p>
        )
      }
    },
    {
      field: "desc",
      headerName: "Sinopsis",
      width: 200,
    },
    {
      field: "year",
      headerName: "Year",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <Link to={`/movie/detail/${params.row._id}`}>
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

  if(movies.length < 0) {
    return <div className="p-10">Loading...</div>
  }

  return (
    <div className="bg-white shadow-xl" style={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={movies}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default TableMovie;
