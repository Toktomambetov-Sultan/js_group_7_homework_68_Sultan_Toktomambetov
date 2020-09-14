import React from "react";
import { useSelector } from "react-redux";
export default function AppForm(props) {
  const state = useSelector((state) => state);
  return (
    <div className="form">
      <div className="container">
        <input
          className="input"
          id="formInput"
          onChange={props.changeValue}
          value={state.value}
        />
        <button className="addBtn" onClick={props.onHeaderClick}>
          add
        </button>
      </div>
    </div>
  );
}
