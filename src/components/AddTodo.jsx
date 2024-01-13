import React, { useState } from 'react';
import "../App.css";
import { useDispatch } from 'react-redux';
import { addTodo } from '../reducers/todoReducer';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo({ id: Date.now(), text }));
    setText('');
  };

  return (
    <div className="todo-input-container">
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;