import TodoItem, { TodoProps } from "../TodoItem/TodoItem";

type TodoListProps = {
  list: Array<TodoProps>;
};

export const TodoList = (props: TodoListProps) => {
  const { list } = props;
  return (
    <>
      {list.map((item: TodoProps) => {
        return (
          <TodoItem
            key={item.id}
            name={item.name}
            id={item.id}
            status={item.status}
          ></TodoItem>
        );
      })}
    </>
  );
};
