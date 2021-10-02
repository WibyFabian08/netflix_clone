import React, { useEffect } from "react";

import { AdminLayout } from "../layout";
import { TableUser } from "../components";
import { Button, Message } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/action/userAction";

const ListUser = () => {
  const dispatch = useDispatch();
  const {message} = useSelector((state) => state.userState);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <AdminLayout>
      {message && (
        <Message messageText={message}></Message>
      )}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">List Users</h2>
        <Button link label={"+ Create User"} path="/users/create"></Button>
      </div>
      <TableUser></TableUser>
    </AdminLayout>
  );
};

export default ListUser;
