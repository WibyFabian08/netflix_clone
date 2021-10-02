import React, {useEffect} from "react";

import { AdminLayout } from "../layout";
import { TableMovie } from "../components";
import { Button, Message } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, getMovies } from "../redux/action/movieAction";

const ListMovie = () => {
  const dispatch = useDispatch()
  const {message} = useSelector((state) => state.movieState);

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])

  const handleDeleteMovie = (id) => {
    dispatch(deleteMovie(id));
  }
  
  return (
    <AdminLayout>
      {message && (
        <Message messageText={message}></Message>
      )}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">List Movies</h2>
        <Button
          link
          label={"+ Create Movie"}
          path="/movie/create"
        ></Button>
      </div>
      <TableMovie handleDeleteMovie={handleDeleteMovie}></TableMovie>
    </AdminLayout>
  );
};

export default ListMovie;
