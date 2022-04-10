import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import TodoItem, { TodoProps } from "./components/TodoItem/TodoItem";
import { TodoList } from "./components/TodoList/TodoList";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { TodoContext } from "./store/TodoContext";

const App = () => {
  const [isAddTodo, setIsAddTodo] = useState(true);

  const [todoList, setTodoList] = useState<Array<TodoProps>>([]);
  const [todoCount, setTodoCount] = useState(0);

  const hideAddTodo = () => {
    setIsAddTodo(false);
  };

  const showAddTodo = () => {
    setIsAddTodo(true);
  };

  const addTextTodoItem = (text: string) => {
    console.log(text);
    let listTodoTemp = todoList;
    let idGen = todoList.length + 1;
    let item = {
      id: idGen,
      name: text,
      status: false,
    };
    listTodoTemp.push(item);
    console.log(listTodoTemp);
    setTodoList(listTodoTemp);
    setTodoCount(listTodoTemp.length);
  };

  return (
    <div>
      <TodoContext.Provider value={{ todoList, setTodoList }}>
        <Header todoCount={todoCount} showInputText={showAddTodo}></Header>
        {isAddTodo ? (
          <AddTodo
            addTodoText={addTextTodoItem}
            hideInputText={hideAddTodo}
          ></AddTodo>
        ) : null}
        <TodoList></TodoList>
      </TodoContext.Provider>
    </div>
  );
};

export default App;
