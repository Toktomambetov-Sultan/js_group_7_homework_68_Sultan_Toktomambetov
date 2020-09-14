import React from "react";
export default function Record(props) {
  const todoStyles = ["todo"];
  if (props.isDone) {
    todoStyles.push("active");
  }
  return (
    <div className="record">
      <h5 className={todoStyles.join(" ")}>{props.todo}</h5>
      <label className="label">
        <input
          type="checkbox"
          className="checkbox"
          onChange={props.changeCheck}
        />
        {props.isDone ? (
          <div className="ans isDone">
            <i className="fas fa-check"></i>
          </div>
        ) : (
          <div className="ans isNotDone"></div>
        )}
      </label>
      <button className="deleteBtn" onClick={props.deleteRecord}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}
