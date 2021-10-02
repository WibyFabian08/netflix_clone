import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { AdminLayout } from "../layout";
import {
  InputText,
  SelectOption,
  Button,
  TextArea,
  InputFile,
  Message
} from "../elements";

import { getLists } from "../redux/action/listAction";
import { createMovie, inputMovieError } from "../redux/action/movieAction";

const CreateMovie = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { lists } = useSelector((state) => state.listState);
  const { movieForm, moviePreview, error } = useSelector((state) => state.movieState);

  useEffect(() => {
    dispatch(getLists());

    dispatch({ type: "SET_MOVIE_FORM_CLEAR" });
  }, [dispatch]);

  const handleChange = (e) => {
    dispatch({
      type: "SET_MOVIE_FORM",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      movieForm.title === "" &&
      movieForm.limit === "" &&
      movieForm.year === "" &&
      movieForm.desc === "" &&
      movieForm.image === null &&
      movieForm.movieLogo === null &&
      movieForm.trailer === null &&
      movieForm.video === null
    ) {
      return dispatch(inputMovieError('Please Fill All The Input Form!'))
    }

    const data = new FormData();

    data.append("title", movieForm.title);
    data.append("year", movieForm.year);
    data.append("limit", movieForm.limit);
    data.append("desc", movieForm.desc);
    data.append("listId", movieForm.list);
    data.append("image", movieForm.image);
    data.append("movieLogo", movieForm.movieLogo);
    data.append("trailer", movieForm.trailer);
    data.append("video", movieForm.video);

    dispatch(createMovie(data, history));
  };

  return (
    <AdminLayout>
      {
        error && <Message error messageText={error}></Message>
      }
      <h2 className="text-xl font-semibold">New Movie</h2>
      <form
        action="POST"
        onSubmit={(e) => handleSubmit(e)}
        encType="Multipart/Form-Data"
      >
        <div className="flex flex-wrap w-full mx-0 mt-5 mb-20 md:-mx-5">
          <div className="w-full px-0 md:w-2/3 md:px-5">
            <InputText
              label="Title"
              name="title"
              value={movieForm.title}
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Movie Title"
              bordered
            ></InputText>
            <InputText
              label="Year"
              name="year"
              value={movieForm.year}
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Year"
              bordered
            ></InputText>
            <InputText
              label="Limit"
              name="limit"
              value={movieForm.limit}
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Limit"
              bordered
            ></InputText>
            <TextArea
              label="Sinopsis"
              placeholder="Sinopsis"
              name="desc"
              value={movieForm.desc}
              onChange={(e) => handleChange(e)}
            ></TextArea>
            <SelectOption
              lists
              listItem={lists}
              name="list"
              data={movieForm.list}
              onChange={(e) => handleChange(e)}
            ></SelectOption>
            <Button create></Button>
          </div>
          <div className="w-full px-0 mt-5 md:w-1/3 md:px-5">
            <div className="relative">
              {moviePreview.image && (
                <img
                  src={URL.createObjectURL(moviePreview.image)}
                  className="object-cover w-full"
                  alt="preview"
                ></img>
              )}
              <InputFile
                label="Movie Poster"
                name="image"
                onChange={(e) => handleChange(e)}
              ></InputFile>
            </div>
            <div className="relative">
              {moviePreview.movieLogo && (
                <img
                  src={URL.createObjectURL(moviePreview.movieLogo)}
                  className="object-cover w-full"
                  alt="preview"
                ></img>
              )}
              <InputFile
                label="Movie Logo"
                name="movieLogo"
                onChange={(e) => handleChange(e)}
              ></InputFile>
            </div>
            <div className="relative">
              {moviePreview.trailer && (
                <video src={URL.createObjectURL(moviePreview.trailer)}></video>
              )}
              <InputFile
                label="Movie Trailer"
                name="trailer"
                onChange={(e) => handleChange(e)}
              ></InputFile>
            </div>
            <div className="relative">
              {moviePreview.video && (
                <video src={URL.createObjectURL(moviePreview.video)}></video>
              )}
              <InputFile
                label="Movie Video"
                name="video"
                onChange={(e) => handleChange(e)}
              ></InputFile>
            </div>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
};

export default CreateMovie;
