import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faTasks,
  faClipboardList,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./TodoItem.css";
import { useState } from "react";

export type TodoProps = {
  id: number;
  name: string;
  status: boolean;
};

const TodoItem = (props: TodoProps) => {
  const { id, name, status } = props;

  const [taskStatus, setTaskStatus] = useState(status);

  return (
    <>
      <div className="todo-bg">
        <div className="textContainer">
          <h4 className="todo-label">{name}</h4>
        </div>
        <div className="actionContainer">
          <div className="actionSeconary">
            {taskStatus ? (
              <FontAwesomeIcon
                className="imageTrash"
                size="2x"
                onClick={() => setTaskStatus(!taskStatus)}
                icon={faClipboardCheck}
              />
            ) : (
              <FontAwesomeIcon
                className="imageTrash"
                size="2x"
                icon={faClipboardList}
                onClick={() => setTaskStatus(!taskStatus)}
              />
            )}
          </div>
          <div className="actionPrimary">
            <FontAwesomeIcon className="imageTrash" size="2x" icon={faTrash} />
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default TodoItem;
