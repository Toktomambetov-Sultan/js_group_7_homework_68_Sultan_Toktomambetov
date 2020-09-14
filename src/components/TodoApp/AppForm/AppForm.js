import React from "react";
export default function AppForm(props) {
  return (
    <div className="form">
      <div className="container">
        <input className="input" id="formInput" onChange={props.changeValue} />
        <button className="addBtn" onClick={props.onHeaderClick}>
          add
        </button>
      </div>
    </div>
  );
}
