import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { AdminLayout } from "../layout";
import { InputText, InputFile, Button, Message } from "../elements";
import { createUser, inputUserError } from "../redux/action/userAction";

const CreateUser = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userForm, error } = useSelector((state) => state.userState);

  const handleChange = (e) => {
    dispatch({
      type: "SET_USER_FORM",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      userForm.username === "" &&
      userForm.email === "" &&
      userForm.password === "" &&
      userForm.image === null
    ) {
      return dispatch(inputUserError('Please Fill All The Input Form!'))
    }

    const data = new FormData();

    data.append("username", userForm.username);
    data.append("email", userForm.email);
    data.append("password", userForm.password);
    data.append("image", userForm.image);

    dispatch(createUser(data, history));
  };
  return (
    <AdminLayout>
      {error && <Message error messageText={error}></Message>}
      <h2 className="text-xl font-semibold">New User</h2>
      <form
        action="POST"
        onSubmit={(e) => handleSubmit(e)}
        encType="Multipart/Form-Data"
      >
        <div className="flex flex-wrap w-full mx-0 mt-5 mb-20 md:-mx-5">
          <div className="w-full px-5 md:w-2/3">
            <InputText
              label="Username"
              name="username"
              onChange={(e) => handleChange(e)}
              type="text"
              value={userForm.username}
              placeholder="Your Username"
              bordered
            ></InputText>
            <InputText
              label="Email"
              name="email"
              type="email"
              value={userForm.email}
              onChange={(e) => handleChange(e)}
              placeholder="Your Email"
              bordered
            ></InputText>
            <InputText
              label="Password"
              name="password"
              type="password"
              value={userForm.password}
              onChange={(e) => handleChange(e)}
              placeholder="Your Password"
              bordered
            ></InputText>
            <Button create></Button>
          </div>
          <div className="w-full px-5 mt-10 md:mt-0 md:w-1/3">
            {userForm.image && (
              <img
                src={URL.createObjectURL(userForm.image)}
                className="object-cover w-full"
                alt="preview"
              ></img>
            )}
            <InputFile
              label="Profile Picture"
              name="image"
              onChange={(e) => handleChange(e)}
            ></InputFile>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
};

export default CreateUser;
