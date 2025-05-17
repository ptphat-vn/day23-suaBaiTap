import React from "react";
import { MyButton } from "./MyButton";

export const BoxTodo = (props) => {
  const { todoName, isDone, onToggleDone, onRemove } = props;
  return (
    <div className={`todo-item ${isDone ? "completed" : ""}`}>
      <p
        className="todo-item-text"
        style={{ textDecoration: isDone ? "line-through" : "none" }}
      >
        {todoName}
      </p>
      <div className="todo-item-actions">
        <MyButton className="todo-item-toggle" handleClick={onToggleDone}>
          {isDone ? "Not Done" : "Done"}
        </MyButton>
        <MyButton className="todo-item-remove" handleClick={onRemove}>
          Remove
        </MyButton>
      </div>
    </div>
  );
};
