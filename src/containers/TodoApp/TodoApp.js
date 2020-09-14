import React, { useEffect } from "react";
import withStore from "../../hocs/withStore.js/withStore";
import "./TodoApp.css";
import "./fontawesome-free-5.14.0-web/css/all.css";
import AppForm from "../../components/TodoApp/AppForm/AppForm";
import Record from "../../components/TodoApp/Record/Record";
import reducer from "./store/reducer";
import { useDispatch, useSelector } from "react-redux";
import {
  changeValue,
  initRecords,
  fetchPut,
  fetchInitRecords,
} from "./store/actions";

function TodoApp() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const changeValueHandler = (event) => {
    dispatch(changeValue(event.target.value));
  };
  const addRecord = () => {
    if (
      state.value &&
      !(state.records.map(elem=>elem.message).indexOf(state.value)+1)
    ) {
      const recordsCopy = [...state.records];
      recordsCopy.unshift({
        message: state.value,
        id: new Date().getTime(),
        isDone: false,
      });
      dispatch(initRecords(recordsCopy));
    }
  };
  useEffect(() => {
    dispatch(fetchInitRecords());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchPut(state.records));
  }, [state.records, dispatch]);
  const changeCheck = (event, id) => {
    const index = state.records.findIndex((record) => record.id === id);
    const recordsCopy = [...state.records];
    const recordCopy = { ...recordsCopy[index] };
    recordCopy.isDone = !recordCopy.isDone;
    recordsCopy[index] = recordCopy;
    dispatch(initRecords(recordsCopy));
  };
  const deleteRecord = (id) => {
    const index = state.records.findIndex((record) => record.id === id);
    const recordsCopy = [...state.records];
    recordsCopy.splice(index, 1);
    dispatch(initRecords(recordsCopy));
  };
  return (
    <div>
      <AppForm onSubmit={addRecord} changeValue={changeValueHandler} />
      <div className="container">
        {state.records.map((record) => (
          <Record
            key={record.id}
            todo={record.message}
            deleteRecord={() => deleteRecord(record.id)}
            changeCheck={(event) => changeCheck(event, record.id)}
            isDone={record.isDone}
          />
        ))}
      </div>
    </div>
  );
}

export default withStore(TodoApp, reducer);
