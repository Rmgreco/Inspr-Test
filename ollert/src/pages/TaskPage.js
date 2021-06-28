import React, { useState } from 'react';
import ListTask from '../components/List/listTask';
import Form from '../components/Form';
import Header from '../components/header'


function TaskPage() {
const pathname = window.location.pathname;
const path = pathname.split('/')[2];
  const [itemsList, setItemsList] = useState([]);
  const inLocalStorage = JSON.parse(localStorage.getItem(`${path}-task`));
  if (!inLocalStorage) {
    localStorage.setItem(`${path}-task`, JSON.stringify(''));
}

  function onAddTask(newItem) { 
    setItemsList([...itemsList, newItem])
    localStorage.setItem(`${path}-task`, JSON.stringify([...inLocalStorage, newItem]));
  }

  return (
    <div>
      <Header />
      <h1>Add Task</h1>
      <Form onAddItem={onAddTask}/>

      <ListTask itemsList={itemsList} /> 
    </div>
  );
}

export default TaskPage;
