import React, { useCallback } from 'react';
import '../App.css';


const TodoItemTask = ({ todo, id, onRemoveTodo, description, priority,
  deadline, time_estimated, image, labels, indicators, onToggleTodoDone, isDone,
  notStarted, onToggleTodoNotStarted, onToggleTodoClosed, closed }) => {
  const removeTodoHandler = useCallback(() => onRemoveTodo(id), [id, onRemoveTodo])
  const toggleTodoDoneHandler = useCallback(() => onToggleTodoDone(id), [id, onToggleTodoDone])
  const toggleTodoNotStartedHandler = useCallback(() => onToggleTodoNotStarted(id), [id, onToggleTodoNotStarted])
  const toggleTodoClosedHandler = useCallback(() => onToggleTodoClosed(id), [id, onToggleTodoClosed])

  return (
    <li className="li" style={{ backgroundColor: closed ? 'grey' : notStarted ? 'red' : 'lightgreen' }}>
      <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{todo}</p>
      <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>Description : {description}</p>
      <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>priority : {priority}</p>
      <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>deadline : {deadline}</p>
      <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>time_estimated : {time_estimated}</p>
      <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>image : {image}</p>
      <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>labels : {labels}</p>
      <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>indicators : {indicators}</p>
      <button onClick={toggleTodoDoneHandler}>{`Mark as ${isDone ? 'pending' : 'done'}`}</button>
      <button onClick={toggleTodoNotStartedHandler}>{`Mark as ${notStarted ? 'in progress' : 'not started'}`}</button>
      <button onClick={toggleTodoClosedHandler}>{`Mark as ${closed ? 'open': 'closed'}`}</button>
      <button onClick={removeTodoHandler}>Remove</button>
    </li>
  )
};

export default TodoItemTask