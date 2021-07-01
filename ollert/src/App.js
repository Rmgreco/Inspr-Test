import React from 'react';
import ListPage from './pages/ListPage';
import TaskPage from './pages/TaskPage';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={ListPage} />
        <Route exact path="/list/:todo" component={TaskPage} />
        </ThemeProvider>
      </Switch>
    </BrowserRouter >
  );
}

export default App;