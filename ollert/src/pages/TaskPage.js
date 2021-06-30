import React, { useState, useCallback } from 'react'
import Header from '../components/header'

import TodoTask from '../components/TodoTask';
import AddNewTaskForm from '../components/AddNewTaskForm';

import { getFromLocalStorage, saveInLocalStorage } from '../helpers'
import '../App.css';


const TaskPage = () => {
    const pathname = window.location.pathname;
    const path = pathname.split('/')[2];
    const pathTitle = path.replace("%20", " ")
    console.log(path);
    const [todoItems, setTodoItems] = useState(getFromLocalStorage(`${path}-task`) || [])

    const addTodoHandler = useCallback((todo, description, priority,
        deadline, time_estimated, image, labels, indicators, linked, blocked) => {
        let latestTodoItem = null
        if (todoItems.length === 1) {
            latestTodoItem = todoItems[0]
        }

        else if (todoItems.length > 1) {
            const todoItemsDescendingSortedById = todoItems.sort((a, b) => a.id > b.id)
            latestTodoItem = todoItemsDescendingSortedById[0]
        }

        const newTaskItems = [
            {
                id: latestTodoItem ? latestTodoItem.id + 1 : 0,
                todo,
                description,
                priority,
                deadline,
                time_estimated,
                image,
                labels,
                indicators,
                linked,
                blocked
            },
            ...todoItems,
        ]
        setTodoItems(newTaskItems)
        saveInLocalStorage(`${path}-task`, newTaskItems)
        console.log(newTaskItems)
    }, [todoItems])

    const removeTodoHandler = useCallback((id) => {
        const newTaskItems = todoItems.filter(todoItem => todoItem.id !== id)

        setTodoItems(newTaskItems)

        saveInLocalStorage(`${path}-task`, newTaskItems)
    }, [todoItems])

    const toggleTodoDoneHandler = useCallback((id) => {
        const todo = todoItems.find(todoItem => todoItem.id === id)
        todo.isDone = !todo.isDone

        setTodoItems([...todoItems])
        saveInLocalStorage(`${path}-task`, todoItems)

    }, [todoItems])

    const toggleTodoNotStartedHandler = useCallback((id) => {
        const todo = todoItems.find(todoItem => todoItem.id === id)
        todo.notStarted = !todo.notStarted

        setTodoItems([...todoItems])
        saveInLocalStorage(`${path}-task`, todoItems)

    }, [todoItems])

    const toggleTodoClosedHandler = useCallback((id) => {
        const todo = todoItems.find(todoItem => todoItem.id === id)
        todo.closed = !todo.closed

        setTodoItems([...todoItems])
        saveInLocalStorage(`${path}-task`, todoItems)
    

    }, [todoItems])

    const editLinked = useCallback((id, linked) => {
        const editingLinked = todoItems.find(todoItem => todoItem.id === id)
        editingLinked.linked = linked
        setTodoItems([...todoItems])

        saveInLocalStorage(`${path}-task`, todoItems)
    
      }, [todoItems])

      const editBlocked = useCallback((id, blocked) => {
        const editingBlocked = todoItems.find(todoItem => todoItem.id === id)
        editingBlocked.blocked = blocked
        setTodoItems([...todoItems])

        saveInLocalStorage(`${path}-task`, todoItems)
    
      }, [todoItems])

    return (
        <div className="todo">
            <Header />
            <h1>{pathTitle} Tasks</h1>
            <AddNewTaskForm
                onAddTask={addTodoHandler}
            />
            <TodoTask
                todoItems={todoItems}
                onRemoveTodo={removeTodoHandler}
                onToggleTodoDone={toggleTodoDoneHandler}
                onToggleTodoNotStarted={toggleTodoNotStartedHandler}
                onToggleTodoClosed={toggleTodoClosedHandler}
                onEditLinked={editLinked}
                onEditBlocked={editBlocked}
            />
        </div>
    );
}

export default TaskPage;