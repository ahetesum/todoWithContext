import { faClose, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./AddTodo.css";

type AddTodoProps = {
  hideInputText: () => void;
};

export const AddTodo = (props: AddTodoProps) => {
  const [todoInput, setTodoInput] = useState("");

  const closeInputBox = () => {};

  const addTodoItem = () => {};

  return (
    <>
      <div className="todo-bg">
        <div className="textContainer">
          <input
            type="text"
            className="inputText"
            placeholder="Enter Your Todo Item Here"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
        </div>
        <div className="actionContainer">
          <div className="actionSeconary">
            <FontAwesomeIcon
              onClick={() => props.hideInputText()}
              className="imageTrash"
              size="2x"
              icon={faClose}
            />
          </div>
          <div className="actionPrimary">
            <FontAwesomeIcon className="imageTrash" size="2x" icon={faPen} />
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
};
