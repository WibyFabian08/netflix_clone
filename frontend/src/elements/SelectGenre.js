import React from "react";

const SelectGenre = ({ type, onChange, value }) => {
  return (
    <div className="absolute z-20 flex items-center top-32 left-8 md:left-24">
      <h2 className="mr-4 text-2xl font-bold text-white">{type}</h2>
      <select
        name="genre"
        value={value}
        onChange={onChange}
        className="px-6 text-white bg-black border border-white border-solid rounded-lg focus:outline-none"
      >
        <option value="">Genre</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        {/* <option value="adventure">Adventure</option> */}
        {/* <option value="crime">Crime</option>
        <option value="fantasy">Fantasy</option>
        <option value="historical">Historical</option>
        <option value="horror">Horror</option>
        <option value="romance">Romance</option>
        <option value="sci-fi">Sci-fi</option>
        <option value="thriller">Thriller</option>
        <option value="western">Western</option>
        <option value="animation">Animation</option>
        <option value="drama">Drama</option>
        <option value="documentary">Documentary</option> */}
      </select>
    </div>
  );
};

export default SelectGenre;
