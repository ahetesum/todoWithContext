import { useEffect, useState } from "react";
import { TodoProps } from "../TodoItem/TodoItem";
import "./Header.css";

type HeaderProps = {
  showInputText: () => void;
  todoCount: number;
};

const Header = (props: HeaderProps) => {
  return (
    <>
      <div className="background">
        <label className="labelTxt">
          Todo List (Total {props.todoCount} Todo Pending)
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
