import React, { useState } from 'react';

function FormTask(props) {
  const [task, setTask] = useState("");
  
  function handleInputTask(event) {
    let inputTask = event.target.value;
    setTask(inputTask);
  }

  function addItem(event) {
    event.preventDefault();
    
    if(task) {
      props.onAddTask(task)
      setTask("");
    }
  }
  
  return (
    <form >
      <input type="text" onChange={handleInputTask} value={task} />
      <button type="submit" onClick={addItem} >Adiciona</button>
    </form>
  )
}

export default FormTask;