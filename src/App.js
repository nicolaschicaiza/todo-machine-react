// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import { Title } from "./Title";

// const url = "https://imagens/chistosas.jpg";

const defaultTodos = [
    { id: "1", text: "Cortar cebolla", completed: false },
    { id: "2", text: "Tomar el curso de intro a React", completed: false },
    { id: "3", text: "Manejar hasta casa", completed: false },
    { id: "4", text: "Refinar la interfaz del proyecto", completed: true },
    { id: "5", text: "Refinar la interfaz del proyecto", completed: false },
    { id: "6", text: "Refinar la interfaz del proyecto", completed: false },
    { id: "7", text: "Refinar la interfaz del proyecto", completed: true },
];

function App() {
    const [todos, setTodos] = React.useState(defaultTodos);
    const [searchValue, setSearchValue] = React.useState("");

    const completedTodos = todos.filter((todo) => todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    return (
        <React.Fragment>
            <Title />
            <TodoCounter total={totalTodos} completed={completedTodos} />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <CreateTodoButton />
            <TodoList>
                {
                    (searchedTodos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    )))
                }
            </TodoList>
        </React.Fragment>

        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>
        //             Edit <code>src/App.js</code> and save to reload.
        //         </p>
        //         <a
        //             className="App-link"
        //             href="https://reactjs.org"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             {props.children}
        //             {props.saludo}
        //         </a>
        //     </header>
        // </div>
    );
}

export default App;
