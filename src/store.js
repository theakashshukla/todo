import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoReducer';

const loadTodosFromLocalStorage = () => {
  try {
    const serializedTodos = localStorage.getItem('todos');
    if (serializedTodos === null) return [];
    return JSON.parse(serializedTodos);
  } catch (error) {
    return [];
  }
};

const saveTodosToLocalStorage = todos => {
  try {
    const serializedTodos = JSON.stringify(todos);
    localStorage.setItem('todos', serializedTodos);
  } catch (error) {
    // Handle errors here
  }
};

const preloadedState = {
  todos: loadTodosFromLocalStorage(),
};

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  saveTodosToLocalStorage(state.todos);
});

export default store;