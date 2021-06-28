import React from 'react';
// import { Link } from 'react-router-dom';

function ListTask(props) {
    const pathname = window.location.pathname;
    const path = pathname.split('/')[2]
    const inLocalStorage = JSON.parse(localStorage.getItem(`${path}-task`));
    if (!inLocalStorage) {
        localStorage.setItem(`${path}-task`, JSON.stringify(''));
        return (
            <ul className="todo-task" >
                {props.itemsList.map(item => (<li>{item}</li>))}
            </ul>
        )
    }
    return (
        <ul className="todo-list" >
            {inLocalStorage.map(item =>
                (<li key={item}>{item}</li>)
            )}
        </ul>
    )
}

export default ListTask;