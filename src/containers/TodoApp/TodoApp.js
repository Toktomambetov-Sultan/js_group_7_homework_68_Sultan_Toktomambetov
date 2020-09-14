import React, { useState } from "react";
import "./TodoApp.css";
import "./fontawesome-free-5.14.0-web/css/all.css";
import AppForm from "../../components/TodoApp/AppForm/AppForm";
import Record from "../../components/TodoApp/Record/Record";

function App() {
  const [records, setRecords] = useState([]);
  let inputValue = "";
  const changeValue = (event) => {
    inputValue = event.target.value;
  };
  const addRecord = () => {
    if (inputValue) {
      const recordsCopy = [...records];
      recordsCopy.unshift({
        message: inputValue,
        id: new Date().getTime(),
      });
      setRecords(recordsCopy);
    }
  };
  const changeCheck = (event, id) => {
    const index = records.findIndex((record) => record.id === id);
    const recordsCopy = [...records];
    const recordCopy = { ...recordsCopy[index] };
    console.log(recordCopy.isDone);
    recordCopy.isDone = !recordCopy.isDone;
    recordsCopy[index] = recordCopy;
    setRecords(recordsCopy);
  };
  const deleteRecord = (id) => {
    const index = records.findIndex((record) => record.id === id);
    const recordsCopy = [...records];
    recordsCopy.splice(index, 1);
    setRecords(recordsCopy);
  };

  return (
    <div>
      <AppForm onHeaderClick={addRecord} changeValue={changeValue} />
      <div className="container">
        {records.map((record) => (
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

export default App;
