import React from "react";
import { useSelector } from "react-redux";
export default function AppForm(props) {
  const state = useSelector((state) => state);
  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit();
      }}
    >
      <div className="container">
        <input
          className="input"
          id="formInput"
          onChange={props.changeValue}
          value={state.value}
        />
        <button className="addBtn">add</button>
      </div>
    </form>
  );
}
