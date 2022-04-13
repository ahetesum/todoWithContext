import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import TodoItem from "./components/TodoItem/TodoItem";
import { TodoList } from "./components/TodoList/TodoList";
import { AddTodo } from "./components/AddTodo/AddTodo";

function App() {
  const [isAddTodo, setIsAddTodo] = useState(true);

  const hideAddTodo = () => {
    setIsAddTodo(false);
  };

  const showAddTodo = () => {
    setIsAddTodo(true);
  };

  const thingsToDo = [
    { id: 1, name: "Buy Milk from Shop", status: true },
    { id: 2, name: "Buy Tea from Shop", status: false },
    { id: 3, name: "Buy Sugar from Shop", status: true },
  ];

  return (
    <div>
      <Header showInputText={showAddTodo}></Header>
      {isAddTodo ? <AddTodo hideInputText={hideAddTodo}></AddTodo> : null}
      <TodoList list={thingsToDo}></TodoList>
    </div>
  );
}

export default App;
