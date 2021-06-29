import React from 'react';

import TodoItemTask from './TodoItemTask'
import '../App.css';

const TodoList = ({ todoItems, onRemoveTodo, onToggleTodoDone, onToggleTodoNotStarted, onToggleTodoClosed }) => (
  <ul >
    {
      todoItems && 
      Array.isArray(todoItems) && 
      todoItems.map(({ id, todo, description, priority,
        deadline, time_estimated, image, labels, indicators, isDone, notStarted, closed }) => ( 
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
          onToggleTodoNotStarted={onToggleTodoNotStarted}
          notStarted={notStarted}
          onToggleTodoClosed={onToggleTodoClosed}
          closed={closed}
        />
      ))
    }
  </ul>
);

export default TodoList