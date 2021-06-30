import React, { useCallback } from 'react';
import '../App.css';



const TodoItemTask = ({ todo, id, onRemoveTodo, description, priority,
  deadline, time_estimated, image, labels, indicators, linked, blocked, onToggleTodoDone, isDone,
  notStarted, onToggleTodoNotStarted, onToggleTodoClosed, closed, onEditLinked, onEditBlocked }) => {
  const removeTodoHandler = useCallback(() => onRemoveTodo(id), [id, onRemoveTodo])
  const toggleTodoDoneHandler = useCallback(() => onToggleTodoDone(id), [id, onToggleTodoDone])
  const toggleTodoNotStartedHandler = useCallback(() => onToggleTodoNotStarted(id), [id, onToggleTodoNotStarted])
  const toggleTodoClosedHandler = useCallback(() => onToggleTodoClosed(id), [id, onToggleTodoClosed])
  
  const editLinked = useCallback(event => {
    if (event.keyCode === 13) { 
      event.preventDefault();
      onEditLinked(id, event.target.value);
      event.target.blur(); 
    }
  }, [id, onEditLinked])

  const editBlocked = useCallback(event => {
    if (event.keyCode === 13) { 
      event.preventDefault();
      onEditBlocked(id, event.target.value);
      event.target.blur(); 
    }
  }, [id, onEditBlocked])

  return (
    <li className="li" style={{ backgroundColor: closed ? 'grey' : notStarted ? 'red' : 'lightgreen' }}>
      <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{todo}</p>
      <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>Description : {description}</p>
      <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>Priority : {priority}</p>
      <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>Deadline : {deadline}</p>
      <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>Time_estimated : {time_estimated}</p>
      <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>Image : {image}</p>
      <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>Labels : {labels}</p>
      <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>Indicators : {indicators}</p>
      
      <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}> Linked to : {linked}</p>
      <form>
      <input
        disabled={false}
        placeholder="Linked to"
        onKeyDown={editLinked} 
        tagname='p' 
        style={{textDecoration: isDone ? 'line-through' : 'none'}}
      />
        <span>Press enter to submit Linked to</span>
      </form>
      <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}> Blocked by : {blocked}</p>
      <form>
      <input
        disabled={false}
        placeholder="Blocked by"
        onKeyDown={editBlocked} 
        tagname='p' 
        style={{textDecoration: isDone ? 'line-through' : 'none'}}
      />
        <span>Press enter to submit Blocked By</span>
      </form>
      <button className="crud" onClick={toggleTodoDoneHandler}>{`Mark as ${isDone ? 'pending' : 'done'}`}</button>
      <button className="crud" onClick={toggleTodoNotStartedHandler}>{`Mark as ${notStarted ? 'in progress' : 'not started'}`}</button>
      <button className="crud" onClick={toggleTodoClosedHandler}>{`Mark as ${closed ? 'open' : 'closed'}`}</button>
      <button className="crud" onClick={removeTodoHandler}>Remove</button>
    </li>
  )
};

export default TodoItemTask