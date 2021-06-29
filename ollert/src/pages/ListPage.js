import React, { useState, useCallback } from 'react'
import Header from '../components/header'

import TodoList from '../components/TodoList';
import AddNewTodoForm from '../components/AddNewTodoForm';

import { getFromLocalStorage, saveInLocalStorage } from '../helpers'
import '../App.css';


const ListPage = () => {
  const [todoItems, setTodoItems] = useState(getFromLocalStorage('todo') || [])

  const addTodoHandler = useCallback(todo => {
    let latestTodoItem = null
    if (todoItems.length === 1) {
      latestTodoItem = todoItems[0]
    }

    else if (todoItems.length > 1) {
      const todoItemsDescendingSortedById = todoItems.sort((a, b) => a.id > b.id)
      latestTodoItem = todoItemsDescendingSortedById[0]
    }

    const newTodoItems = [
      {
        id: latestTodoItem ? latestTodoItem.id + 1 : 0,
        todo,
      },
      ...todoItems,
    ]
    setTodoItems(newTodoItems)
    saveInLocalStorage('todo', newTodoItems)
  }, [todoItems]) 

  const removeTodoHandler = useCallback(id => {
    const newTodoItems = todoItems.filter(todoItem => todoItem.id !== id)

    setTodoItems(newTodoItems)

    saveInLocalStorage('todo', newTodoItems)
  }, [todoItems])

  return (
    <div className="todo">
      <Header />
      <h1>Lists</h1>
      <AddNewTodoForm
        onAddTodo={addTodoHandler} 
      />
      <TodoList
        todoItems={todoItems}
        onRemoveTodo={removeTodoHandler}
      />
    </div>
  );
}

export default ListPage;