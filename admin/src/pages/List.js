import React, { useEffect } from "react";

import { AdminLayout } from "../layout";
import { TableList } from "../components";
import { Button, Message } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { getLists, deleteList } from "../redux/action/listAction";

const List = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.listState);

  const handleDelete = (id) => {
    dispatch(deleteList(id));
  };

  useEffect(() => {
    dispatch(getLists());
  }, [dispatch]);

  return (
    <AdminLayout>
      {message && (
        <Message messageText={message}></Message>
      )}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">List</h2>
        <Button link label={"+ Create List"} path="/list/create"></Button>
      </div>
      <TableList handleDelete={handleDelete}></TableList>
    </AdminLayout>
  );
};

export default List;
