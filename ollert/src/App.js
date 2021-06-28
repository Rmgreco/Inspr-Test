import React from 'react';
import ListPage from './pages/ListPage';
import Header from './components/header'
import './App.css';

function App() {
  return (
    <div className="todo-wrapper">
      <Header />
      <ListPage />
    </div>
  );
}

export default App;