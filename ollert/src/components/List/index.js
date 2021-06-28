import React from 'react';
import { Link } from 'react-router-dom';

function List (props) {
    const inLocalStorage = JSON.parse(localStorage.getItem('list'));
    if (!inLocalStorage){
        localStorage.setItem('list', JSON.stringify(''));
        return(
            <ul className="todo-list" >
              {props.itemsList.map(item => (<li>{item}</li> ))}
            </ul>
          )
      }
  return(
    <ul className="todo-list" >
      {inLocalStorage.map(item => 
        (<li key={item}><Link to = {`/list/${item}`}>{item}</Link></li> )
        )}
    </ul>
  )
}

export default List;