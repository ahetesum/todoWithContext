import { useContext } from "react";
import { useTodoContext } from "../../store/TodoContext";
import TodoItem, { TodoProps } from "../TodoItem/TodoItem";

export const TodoList = () => {
  const { todoList } = useTodoContext();
  return (
    <>
      {todoList.map((item: TodoProps) => {
        return <TodoItem key={item.id} item={item}></TodoItem>;
      })}
    </>
  );
};
