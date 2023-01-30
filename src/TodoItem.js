import React from "react";
import "./TodoItem.css";
import { FaCheck, FaTimes } from "react-icons/fa";

function TodoItem(props) {
    const onComplete = () => {
        alert("Ya completaste el todo: " + props.todo.text);
    };

    const onDelete = () => {
        alert("Borraste el todo: " + props.todo.text);
    };

    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${
                    props.todo.completed && "Icon-check--active"
                }`}
                onClick={onComplete}
            >
                <FaCheck />
            </span>
            <p
                className={`TodoItem-p ${
                    props.todo.completed && "TodoItem-p--complete"
                }`}
            >
                {props.todo.text}
            </p>
            <span className="Icon Icon-delete" onClick={onDelete}>
                <FaTimes />
            </span>
        </li>
    );
}

export { TodoItem };
