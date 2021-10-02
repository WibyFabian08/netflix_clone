import React from "react";

const SelectGender = () => {
  return (
    <div className="my-5">
      <label htmlFor="gender" className="block mb-2">
        Gender
      </label>
      <input type="radio" id="male" name="gender" value="male" /> {" "}
      <label className="mr-3" for="male">
        Male
      </label>
      <input type="radio" id="female" name="gender" value="female" /> {" "}
      <label className="mr-3" for="female">
        Female
      </label>
    </div>
  );
};

export default SelectGender;
