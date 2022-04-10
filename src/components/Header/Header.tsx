import { useEffect, useState } from "react";
import { TodoProps } from "../TodoItem/TodoItem";
import "./Header.css";

type HeaderProps = {
  showInputText: () => void;
  list: Array<TodoProps>;
};

const Header = (props: HeaderProps) => {
  const [todoCount, setTodoCount] = useState(0);

  useEffect(() => {
    let count = props.list.filter((x) => x.status == false).length;
    setTodoCount(count);
  }, []);

  return (
    <>
      <div className="background">
        <label className="labelTxt">
          Todo List (Total {todoCount} Todo Pending)
        </label>
        <img
          onClick={() => props.showInputText()}
          className="imagePlus"
          src={require("../../assets/icons8-plus.png")}
        />
      </div>
    </>
  );
};

export default Header;
