import { createContext, useContext } from "react";
import { TodoProps } from "../components/TodoItem/TodoItem";
export type TodoContent = {
  todoList: Array<TodoProps>;
  setTodoList: (list: Array<TodoProps>) => void;
};
export const TodoContext = createContext<TodoContent>({
  todoList: [],
  setTodoList: () => {},
});
export const useTodoContext = () => useContext(TodoContext);
