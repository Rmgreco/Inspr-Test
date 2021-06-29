import React from 'react';
import ListPage from './pages/ListPage';
import TaskPage from './pages/TaskPage';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" render={ (props) => <ListPage {...props}/> } />
      <Route exact path="/list/:todo" render={ (props) => <TaskPage {...props}/> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;