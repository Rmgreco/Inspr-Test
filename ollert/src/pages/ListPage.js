import React, { useState } from 'react';
import List from '../components/List';
import Form from '../components/Form';
import Header from '../components/header'


function ListPage() {
  const [itemsList, setItemsList] = useState([]);
  const inLocalStorage = JSON.parse(localStorage.getItem('list'));
  if (!inLocalStorage){
    localStorage.setItem('list', JSON.stringify(''));
  }

  function onAddItem(newItem) { 
    setItemsList([...itemsList, newItem])
    localStorage.setItem('list', JSON.stringify([...inLocalStorage, newItem]));
  }

  return (
    <div className="todo-wrapper">
      <Header />
      <h1>Add List</h1>
      <Form onAddItem={onAddItem}/>

      <List itemsList={itemsList} /> 
    </div>
  );
}

export default ListPage;