import React from 'react';

import TodoItemTask from './TodoItemTask'
import '../App.css';

const TodoList = ({ todoItems, onRemoveTodo, onToggleTodoDone }) => (
  <ul >
    {
      todoItems && 
      Array.isArray(todoItems) && 
      todoItems.map(({ id, todo, description, priority,
        deadline, time_estimated, image, labels, indicators, isDone }) => ( 
        <TodoItemTask
          key={id}
          id={id}
          todo={todo}
          description={description}
          priority={priority}
          deadline={deadline}
          time_estimated={time_estimated}
          image={image}
          labels={labels}
          indicators={indicators}
          onRemoveTodo={onRemoveTodo}
          onToggleTodoDone={onToggleTodoDone}
          isDone={isDone}
        />
      ))
    }
  </ul>
);

export default TodoList