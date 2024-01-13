import React from "react";
import "../App.css"
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../reducers/todoReducer";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default TodoList;
