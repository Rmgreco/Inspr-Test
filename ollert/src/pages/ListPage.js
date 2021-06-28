import React, { useState } from 'react';
import List from '../components/List';
import Form from '../components/Form';


function ListPage() {
  const [itemsList, setItemsList] = useState([]);
  const inLocalStorage = JSON.parse(localStorage.getItem('list'));

  function onAddItem(newItem) { 
    setItemsList([...itemsList, newItem])
    localStorage.setItem('list', JSON.stringify([...inLocalStorage, newItem]));
  }

  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <Form onAddItem={onAddItem}/>

      <List itemsList={itemsList} /> 
    </div>
  );
}

export default ListPage;