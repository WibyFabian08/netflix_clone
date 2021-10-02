import React, { useEffect } from "react";

import { AdminLayout } from "../layout";
import { TableListContent } from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMovieOnList,
  getMovieByListId,
} from "../redux/action/listAction";

const List = ({ match }) => {
  const dispatch = useDispatch();
  const { listContent } = useSelector((state) => state.listState);

  const handleDelete = (movieId) => {
    dispatch(deleteMovieOnList(listContent._id, movieId));
  };

  useEffect(() => {
    dispatch(getMovieByListId(match.params.id));

    return () => {
      dispatch({ type: "SET_LIST_CONTENT", value: null });
    };
  }, [dispatch, match.params.id]);

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">List of {listContent?.title}</h2>
      </div>
      <TableListContent handleDelete={handleDelete}></TableListContent>
    </AdminLayout>
  );
};

export default List;
