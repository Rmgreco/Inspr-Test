import React from 'react';
import ListPage from './pages/ListPage';
import TaskPage from './pages/TaskPage';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
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