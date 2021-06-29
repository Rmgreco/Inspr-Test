import React from 'react';
import '../App.css';

import TodoItem from './TodoItem'

const TodoList = ({ todoItems, onRemoveTodo }) => (
  <ul>
    {
      todoItems && 
      Array.isArray(todoItems) && 
      todoItems.map(({ id, todo }) => ( 
        <TodoItem
          key={id}
          id={id}
          todo={todo}
          onRemoveTodo={onRemoveTodo}
        />
      ))
    }
  </ul>
);

export default TodoList