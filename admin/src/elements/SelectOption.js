import React from "react";

const SelectOption = ({ onChange, movie, role, lists, data, name, listItem }) => {
  if (lists) {
    return (
      <div className="flex flex-col mb-5">
        <label htmlFor="list">Choose List</label>
        <select
          value={data}
          name={name}
          onChange={onChange}
          className="px-4 py-2 mt-2 border border-gray-300 border-solid rounded-lg focus:outline-none focus:border-indigo-800"
        >
          <option value="">List Category</option>
          {listItem &&
            listItem.map((list) => {
              return (
                <option key={list._id} value={list._id}>
                  {list.title}
                </option>
              );
            })}
        </select>
      </div>
    );
  }

  if (role) {
    return (
      <div className="flex flex-col mb-5">
        <label htmlFor="username">Is Admin</label>
        <select
          value={data && data?.isAdmin}
          onChange={onChange}
          name={name}
          className="px-4 py-2 mt-2 border border-gray-300 border-solid rounded-lg focus:outline-none focus:border-indigo-800"
        >
          <option>{data?.isAdmin ? "Admin" : "User"}</option>
          <option value={true}>Admin</option>
          <option value={false}>User</option>
        </select>
      </div>
    );
  }

  if (movie) {
    return (
      <div className="flex flex-col mb-5">
        <label htmlFor="type">Type</label>
        <select
          onChange={onChange}
          value={data && data.type}
          name={name}
          className="px-4 py-2 mt-2 border border-gray-300 border-solid rounded-lg focus:outline-none focus:border-indigo-800"
        >
          <option>Type</option>
          <option value='Series'>Series</option>
          <option value='Movie'>Movie</option>
        </select>
      </div>
    );
  }

  return (
    <div className="flex flex-col mb-5">
      <label htmlFor="username">Status</label>
      <select
        onChange={onChange}
        className="px-4 py-2 mt-2 border border-gray-300 border-solid rounded-lg focus:outline-none focus:border-indigo-800"
      >
        <option value="">Status</option>
        <option value="true">Active</option>
        <option value="false">No Active</option>
      </select>
    </div>
  );
};

export default SelectOption;
