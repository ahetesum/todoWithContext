import TodoItem, { TodoProps } from "../TodoItem/TodoItem";

type TodoListProps = {
  list: Array<TodoProps>;
};

export const TodoList = (props: TodoListProps) => {
  const { list } = props;
  return (
    <>
      {list.map((item: TodoProps) => {
        return <TodoItem key={item.id} item={item}></TodoItem>;
      })}
    </>
  );
};
