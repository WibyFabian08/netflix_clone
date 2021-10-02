import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { AdminLayout } from "../layout";
import { InputText, Button, Message } from "../elements";
import {
  createList,
  getList,
  inputListError,
  setListForm,
  updateList,
} from "../redux/action/listAction";

const CreateUser = ({ match }) => {
  const id = match.params.id;
  const history = useHistory();
  const dispatch = useDispatch();

  const { listForm, listDetail, error } = useSelector(
    (state) => state.listState
  );

  const handleChange = (e) => {
    dispatch({
      type: "SET_LIST_FORM",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id) {
      if (
        listForm.title === "" &&
        listForm.genre === "" &&
        listForm.type === ""
      ) {
        return dispatch(inputListError("Please Fill All The Input Form!"));
      }

      dispatch(createList(listForm, history));
    } else {
      dispatch(updateList(id, listForm, history));
    }
  };

  useEffect(() => {
    dispatch(setListForm("title", listDetail?.title));
    dispatch(setListForm("genre", listDetail?.genre));
    dispatch(setListForm("type", listDetail?.type));
  }, [listDetail, dispatch]);

  useEffect(() => {
    if (match.params.id) {
      dispatch(getList(id));
    } else {
      dispatch({ type: "SET_LIST_FORM_CLEAR" });
    }
  }, [dispatch, match.params.id, id]);

  return (
    <AdminLayout>
      {error && <Message error messageText={error}></Message>}
      <h2 className="text-xl font-semibold">{id ? "Edit List" : "New List"}</h2>
      <form action="POST" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-wrap w-full mx-0 mt-5 mb-20 md:-mx-5">
          <div className="w-full px-5 md:w-2/3">
            <InputText
              label="List Title"
              name="title"
              onChange={(e) => handleChange(e)}
              type="text"
              value={listForm?.title}
              placeholder="List Title"
              bordered
            ></InputText>
            <InputText
              label="Genre"
              name="genre"
              type="text"
              value={listForm?.genre}
              onChange={(e) => handleChange(e)}
              placeholder="List Genre"
              bordered
            ></InputText>
            <InputText
              label="List Type"
              name="type"
              type="text"
              value={listForm?.type}
              onChange={(e) => handleChange(e)}
              placeholder="List Type"
              bordered
            ></InputText>
            <Button create></Button>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
};

export default CreateUser;
