import React, { useRef } from "react";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useDispatch } from "react-redux";

const InputFile = ({ label, onChange, name }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const setFile = (e) => {
    dispatch({ type: "SET_IMAGE_PREVIEW", value: e.target.files[0] });
    dispatch({
      type: "SET_MOVIE_PREVIEW",
      name: e.target.name,
      value: e.target.files[0],
    });
    onChange({
      target: {
        name: e.target.name,
        value: e.target.files[0],
      },
    });
  };

  return (
    <div className="w-full mb-10">
      <input
        type="file"
        className="hidden"
        name={name}
        onChange={(e) => setFile(e)}
        ref={inputRef}
      />
      <button
        type="button"
        className="w-full px-4 py-2 mt-3 text-white transition-all duration-300 bg-green-500 rounded-lg hover:bg-green-400"
        onClick={() => inputRef?.current.click()}
      >
        <FileUploadIcon style={{ color: "white" }}></FileUploadIcon> {label}
      </button>
    </div>
  );
};

export default InputFile;
