import React, { useState } from "react";
import { MyInput } from "./MyInput";
import { MyButton } from "./MyButton";
import { BoxTodo } from "./BoxTodo";

export const AppTodo = () => {
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useState([]);
  const handleOnChange = (e) => {
    console.log(e.target.value);

    setTodoName(e.target.value);
  };
  const handleSubmit = () => {
    if (todoName.trim()) {
      const newTodo = {
        id: Date.now(),
        name: todoName,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      setTodoName("");
    }
  };
  const handleToggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="todo-app">
      <div className="todo-container">
        <h1 className="todo-title">Todo List</h1>

        <div className="todo-form">
          <MyInput
            type="text"
            placeholder="Enter your todo....."
            value={todoName}
            handleOnChange={handleOnChange}
            className="todo-input"
          />
          <MyButton handleClick={handleSubmit} className="todo-button">
            Add
          </MyButton>
        </div>
        <div className="todo-list">
          {todos.length === 0 ? (
            <p className="todo-empty">Not yet todo, Pls enter your todo...</p>
          ) : (
            todos.map((todo) => (
              <BoxTodo
                key={todo.id}
                todoName={todo.name}
                isDone={todo.isDone}
                onToggleDone={() => handleToggleDone(todo.id)}
                onRemove={() => handleRemove(todo.id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
