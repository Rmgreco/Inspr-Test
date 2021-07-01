import React from 'react';
import ListPage from './pages/ListPage';
import TaskPage from './pages/TaskPage';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListPage} />
        <Route exact path="/list/:todo" component={TaskPage} />
      </Switch>
    </BrowserRouter >
  );
}

export default App;