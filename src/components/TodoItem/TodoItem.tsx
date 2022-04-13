import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faTasks,
  faClipboardList,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./TodoItem.css";
import { useEffect, useState } from "react";

export type TodoProps = {
  id: number;
  name: string;
  status: boolean;
};

const TodoItem = (props: TodoProps) => {
  const { id, name, status } = props;

  const [isStatus,setIsSatus]=useState(status);


  return (

    <>
      <div className="todo-bg">
        <div className="textContainer">
          <h4 className={(isStatus)? "todo-label stripeText":"todo-label"}>{name}</h4>
        </div>
        <div className="actionContainer">
          <div className="actionSeconary">
            {isStatus == false ? (
              <FontAwesomeIcon
                className="imageTrash"
                size="2x"
                icon={faClipboardList}
                onClick={() => setIsSatus(!isStatus) }
              />
            ) : (
              <FontAwesomeIcon
                className="imageTrash"
                size="2x"
                icon={faClipboardCheck}
                onClick={() => setIsSatus(!isStatus)}

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
