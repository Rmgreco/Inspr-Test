import React, { useState, useCallback } from 'react'
import Header from '../components/header'

import TodoList from '../components/TodoList';
import AddNewTodoForm from '../components/AddNewTodoForm';

import { getFromLocalStorage, saveInLocalStorage } from '../localStorage'
import '../App.css';


const ListPage = () => {
  const [todoItems, setList] = useState(getFromLocalStorage('todo') || [])

  const addList = useCallback(todo => {
    let latestTodoItem = null
    if (todoItems.length === 1) {
      latestTodoItem = todoItems[0]
    }

    else if (todoItems.length > 1) {
      const list = todoItems.sort((a, b) => a.id > b.id)
      latestTodoItem = list[0]
    }

    const newList = [
      {
        id: latestTodoItem ? latestTodoItem.id + 1 : 0,
        todo,
      },
      ...todoItems,
    ]
    setList(newList)
    saveInLocalStorage('todo', newList)
  }, [todoItems]) 

  const removeList = useCallback(id => {
    const newList = todoItems.filter(todoItem => todoItem.id !== id)

    setList(newList)

    saveInLocalStorage('todo', newList)
  }, [todoItems])

  return (
    <div className="list-page">
      <Header />
      <h1 className="page-title">Lists</h1>
      <AddNewTodoForm
        onAddTodo={addList} 
      />
      <TodoList
        todoItems={todoItems}
        onRemoveTodo={removeList}
      />
    </div>
  );
}

export default ListPage;