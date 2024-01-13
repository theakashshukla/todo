import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>To-Do App</h1>
        <div className="container"> 
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
