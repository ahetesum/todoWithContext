import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faTasks,
  faClipboardList,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./TodoItem.css";

export type TodoProps = {
  id: number;
  name: string;
  status: number;
};

const TodoItem = (props: TodoProps) => {
  const { id, name, status } = props;

  const setStausUpdate = () => {
    //status == 0 ? (status = 1) : (status = 0);
  };

  return (
    <>
      <div className="todo-bg">
        <div className="textContainer">
          <h4 className="todo-label">{name}</h4>
        </div>
        <div className="actionContainer">
          <div className="actionSeconary">
            {status == 0 ? (
              <FontAwesomeIcon
                className="imageTrash"
                size="2x"
                icon={faClipboardList}
                onClick={() => setStausUpdate()}
              />
            ) : (
              <FontAwesomeIcon
                className="imageTrash"
                size="2x"
                icon={faClipboardCheck}
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
