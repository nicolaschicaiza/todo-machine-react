import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

// const e = React.createElement;

// function pp() {
//   return (
//     <h1 id="title">
//       Oli React
//     </h1>
//     // React.createElement('h1', { id: 'title' }, 'Oli React')
//   )
// }

// class Componente extends React.Component {

// }

// ReactDOM.createRoot.render(e());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
    // <App saludo="Buenas">
    //     <h1>Esto es un título</h1>
    // </App>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
