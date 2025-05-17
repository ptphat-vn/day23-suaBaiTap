import React, { useState } from "react";
import { MyInput } from "./MyInput";
import { MyButton } from "./MyButton";
import { BoxTodo } from "./BoxTodo";

export const AppTodo = () => {
  const [todoName, setTodoName] = useState("");
  const [todos, setTodo] = useState([]);
  const handleOnChange = (e) => {
    console.log(e.target.value);

    setTodoName(e.target.value);
  };
  const handleSubmit = () => {
    alert("Hello world");
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <MyInput
          type="text"
          placeholder="Enter your todo....."
          value={todoName}
          handleOnChange={handleOnChange}
        />
        <MyButton handleClick={handleSubmit}>Add</MyButton>
      </div>
      <div>
        <BoxTodo />
      </div>
    </div>
  );
};
