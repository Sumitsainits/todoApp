import React from 'react';
import Todoheader from './todoList/todolistHeader';
import TitleText from './todoList/listTitle';
import TodoList from './todoList/todolist';
import './App.css';

function App() {
  return (
    <div className="App">
      <Todoheader />
      <TitleText name = {localStorage.getItem('setTitle')|| 'Todo List'} />
      <TodoList />
    </div>
  );
}

export default App;