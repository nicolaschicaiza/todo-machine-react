import React from "react";
import "./CreateTodoButton.css";
import { FaPlus } from "react-icons/fa";

function CreateTodoButton() {
    const onClickButton = (msg) => {
        alert(msg);
    }

    return (
        <button
            className="CreateTodoButton"
            onClick={() => onClickButton("clic")}
        >
            <FaPlus />
        </button>
    );
}

export { CreateTodoButton };
