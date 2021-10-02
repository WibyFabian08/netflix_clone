import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { getLists } from "../redux/action/listAction";

import {
  InputText,
  Button,
  InputFile,
  SelectOption,
  TextArea,
} from "../elements";

const CardEdit = ({
  label,
  user,
  movie,
  data,
  handleSubmit,
  imagePreview,
  handleChange,
}) => {
  const dispatch = useDispatch();
  const { moviePreview } = useSelector((state) => state.movieState);
  const { lists } = useSelector((state) => state.listState);

  useEffect(() => {
    dispatch(getLists())
  }, [dispatch])

  if (user) {
    return (
      <div>
        <h2 className="text-xl font-semibold">{label}</h2>
        <div className="flex flex-wrap-reverse mt-5">
          <div className="w-full md:w-1/2">
            <form
              action="POST"
              onSubmit={(e) => handleSubmit(e)}
              encType="Multipart/Form-Data"
            >
              <InputText
                type="text"
                label="Username"
                name="username"
                placeholder={data && data?.username}
                value={data && data?.username}
                onChange={(e) => handleChange(e)}
              ></InputText>
              <InputText
                type="email"
                label="Email"
                name="email"
                placeholder={data && data?.email}
                value={data && data?.email}
                onChange={(e) => handleChange(e)}
              ></InputText>
              <SelectOption
                role
                onChange={(e) => handleChange(e)}
                name="isAdmin"
              ></SelectOption>
              <Button edit></Button>
            </form>
          </div>
          <div className="w-full px-0 mb-5 md:px-5 md:w-1/2 md:mb-0">
            <img
              src={
                imagePreview
                  ? URL.createObjectURL(imagePreview)
                  : `http://localhost:3000${data?.image}`
              }
              className="object-cover w-full mb-3 rounded-lg shadow-lg"
              alt="profile"
            />
            <InputFile
              label="Profile Image"
              name="image"
              onChange={(e) => handleChange(e)}
            ></InputFile>
          </div>
        </div>
      </div>
    );
  }

  if (movie) {
    return (
      <div>
        <h2 className="text-xl font-semibold">{label}</h2>
        <form
          action="POST"
          onSubmit={(e) => handleSubmit(e)}
          encType="Multipart/Form-Data"
        >
          <div className="flex flex-wrap-reverse mt-5">
            <div className="w-full md:w-1/2">
              <InputText
                type="text"
                name="title"
                label="Title"
                placeholder={data && data?.title}
                value={data && data?.title}
                onChange={(e) => handleChange(e)}
              ></InputText>
              <InputText
                type="text"
                name="year"
                label="Year"
                placeholder={data && data?.year}
                value={data && data?.year}
                onChange={(e) => handleChange(e)}
              ></InputText>
              <InputText
                type="text"
                name="limit"
                label="Limit"
                placeholder={data && data?.limit}
                value={data && data?.limit}
                onChange={(e) => handleChange(e)}
              ></InputText>
              <TextArea
                name="desc"
                label="Sinopsis"
                placeholder={data && data?.desc}
                value={data && data?.desc}
                onChange={(e) => handleChange(e)}
              ></TextArea>
              <SelectOption
                lists
                listItem={lists}
                name="list"
                onChange={(e) => handleChange(e)}
              ></SelectOption>
              <Button edit></Button>
            </div>
            <div className="w-full px-0 mb-5 md:px-5 md:w-1/2 md:mb-0">
              <img
                src={
                  moviePreview.image
                    ? URL.createObjectURL(moviePreview.image)
                    : `http://localhost:3000${data?.image}`
                }
                className="object-cover w-full mb-3 rounded-lg shadow-lg"
                alt="preview"
              />
              <InputFile
                name="image"
                label="Movie Poster"
                onChange={(e) => handleChange(e)}
              ></InputFile>
              <img
                src={
                  moviePreview.movieLogo
                    ? URL.createObjectURL(moviePreview.movieLogo)
                    : `http://localhost:3000${data?.movieLogo}`
                }
                className="object-cover w-full mb-3 rounded-lg shadow-lg"
                alt="logo preview"
              />
              <InputFile
                name="movieLogo"
                label="Movie Logo"
                onChange={(e) => handleChange(e)}
              ></InputFile>
              <video
                muted={true}
                controls
                src={
                  moviePreview.trailer
                    ? URL.createObjectURL(moviePreview.trailer)
                    : `http://localhost:3000${data?.trailer}`
                }
                className="object-cover w-full mb-3 rounded-lg shadow-lg"
                alt="trailer"
              />
              <InputFile
                name="trailer"
                label="Movie Trailer"
                onChange={(e) => handleChange(e)}
              ></InputFile>
              <video
                muted={true}
                controls
                src={
                  moviePreview.video
                    ? URL.createObjectURL(moviePreview.video)
                    : `http://localhost:3000${data?.video}`
                }
                className="object-cover w-full mb-3 rounded-lg shadow-lg"
                alt="movie"
              />
              <InputFile
                name="video"
                label="Movie Video"
                onChange={(e) => handleChange(e)}
              ></InputFile>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold">{label}</h2>
      {/* <div className="flex flex-wrap-reverse mt-5">
        <div className="w-full md:w-1/2">
          <form action="POST" onSubmit={(e) => handleSubmit(e)}>
            <InputText
              type="text"
              label="Username"
              placeholder="will08"
            ></InputText>
            <InputText
              type="text"
              label="Full Name"
              placeholder="Wiby Fabian Rianto"
            ></InputText>
            <InputText
              type="email"
              label="Email"
              placeholder="wibyfabian08@gmail.com"
            ></InputText>
            <InputText
              type="text"
              label="Phone"
              placeholder="089663191201"
            ></InputText>
            <InputText
              type="text"
              label="Address"
              placeholder="Garut, Indonesia"
            ></InputText>
            <Button edit></Button>
          </form>
        </div>
        <div className="w-full px-0 mb-5 md:px-5 md:w-1/2 md:mb-0">
          <img
            src="/images/profile.jpg"
            className="object-cover w-full mb-3 rounded-lg shadow-lg"
            alt="profile"
          />
          <InputFile></InputFile>
        </div>
      </div> */}
    </div>
  );
};

export default CardEdit;
