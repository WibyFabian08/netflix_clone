import React, { useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";

import { AdminLayout } from "../layout";
import { CardDetail, CardEdit } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUserForm, updateUser } from "../redux/action/userAction";

const User = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { userForm, user, imagePreview } = useSelector(
    (state) => state.userState
  );

  const handleChange = (e) => {
    dispatch({
      type: "SET_USER_FORM",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("username", userForm.username);
    data.append("email", userForm.email);
    data.append("isAdmin", userForm.isAdmin);
    data.append("image", userForm.image);

    dispatch(updateUser(match.params.id, data, history));
  };

  useEffect(() => {
    dispatch(getUser(match.params.id));

    return () => {
      dispatch({type: 'SET_USER', value: {}})
    }
  }, [dispatch, match.params.id]);

  useEffect(() => {
    dispatch(setUserForm("username", user.username));
    dispatch(setUserForm("email", user.email));
    dispatch(setUserForm("image", user.profilePict));
    dispatch(setUserForm("isAdmin", user.isAdmin));
  }, [user, dispatch]);

  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold">Profile User</h2>
      <div className="flex flex-wrap w-full mt-5 -mx-2">
        <div className="w-full px-2 mb-5 md:w-1/3 md:mb-0">
          <div className="p-5 bg-white rounded-lg shadow-xl">
            <CardDetail user data={user}></CardDetail>
          </div>
        </div>
        <div className="w-full px-2 md:w-2/3">
          <div className="p-5 bg-white rounded-lg shadow-xl">
            <CardEdit
              label="Edit User"
              user
              data={userForm}
              handleSubmit={handleSubmit}
              imagePreview={imagePreview}
              handleChange={handleChange}
            ></CardEdit>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default withRouter(User);
