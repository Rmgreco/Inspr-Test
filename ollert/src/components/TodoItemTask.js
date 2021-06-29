import React, { useCallback } from 'react';
import '../App.css';


    const TodoItemTask = ({ todo, id, onRemoveTodo, description, priority,
      deadline, time_estimated, image, labels, indicators, onToggleTodoDone, isDone }) => {
        const removeTodoHandler = useCallback(() => onRemoveTodo(id), [id, onRemoveTodo])
      
        const toggleTodoDoneHandler = useCallback(() => onToggleTodoDone(id), [id, onToggleTodoDone])
        return (
          <li className="li">
            <p style={{textDecoration: isDone ? 'line-through' : 'none'}}>{todo}</p>
            <p style={{textDecoration: isDone ? 'line-through' : 'none'}}>Description : {description}</p>
            <p style={{textDecoration: isDone ? 'line-through' : 'none'}}>priority : {priority}</p>
            <p style={{textDecoration: isDone ? 'line-through' : 'none'}}>deadline : {deadline}</p>
            <p style={{textDecoration: isDone ? 'line-through' : 'none'}}>time_estimated : {time_estimated}</p>
            <p style={{textDecoration: isDone ? 'line-through' : 'none'}}>image : {image}</p>
            <p style={{textDecoration: isDone ? 'line-through' : 'none'}}>labels : {labels}</p>
            <p style={{textDecoration: isDone ? 'line-through' : 'none'}}>indicators : {indicators}</p>
            <button onClick={toggleTodoDoneHandler}>{`Mark as ${isDone ? 'pending': 'done'}`}</button>
            <button onClick={removeTodoHandler}>Remove</button>
          </li>
        )
      };

export default TodoItemTask