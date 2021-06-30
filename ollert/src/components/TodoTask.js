import React from 'react';

import TodoItemTask from './TodoItemTask'
import '../App.css';

const TodoTask = ({ todoItems, onRemoveTodo, onToggleTodoDone, onToggleTodoNotStarted, onToggleTodoClosed, onEditLinked, onEditBlocked }) => (
  <ul >
    {
      todoItems && 
      Array.isArray(todoItems) && 
      todoItems.map(({ id, todo, description, priority,
        deadline, time_estimated, image, labels, indicators, linked, isDone, notStarted, closed, blocked }) => ( 
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
          onEditLinked={onEditLinked}
          linked={linked}
          onEditBlocked={onEditBlocked}
          blocked={blocked}
        />
      ))
    }
  </ul>
);

export default TodoTask