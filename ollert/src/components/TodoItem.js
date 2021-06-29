import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

    const TodoItem = ({ todo, id, onRemoveTodo }) => {
        const removeTodoHandler = useCallback(() => onRemoveTodo(id), [id, onRemoveTodo])
      
        return (
          <li className="lists">
            <span><Link to = {`/list/${todo}`}>{todo}</Link></span>
            <button onClick={removeTodoHandler}>Remove</button>
          </li>
        )
      };

export default TodoItem