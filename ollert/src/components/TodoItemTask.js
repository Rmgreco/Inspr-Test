import React, { useCallback } from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const TodoItemTask = ({ todo, id, onRemoveTodo, description, priority,
  deadline, time_estimated, image, labels, indicators, linked, blocked, onToggleTodoDone, isDone,
  notStarted, onToggleTodoNotStarted, onToggleTodoClosed, closed, onEditLinked, onEditBlocked, onEditColor, color }) => {
  const classes = useStyles();
  const removeTodoHandler = useCallback(() => onRemoveTodo(id), [id, onRemoveTodo])
  const toggleTodoDoneHandler = useCallback(() => onToggleTodoDone(id), [id, onToggleTodoDone])
  const toggleTodoNotStartedHandler = useCallback(() => onToggleTodoNotStarted(id), [id, onToggleTodoNotStarted])
  const toggleTodoClosedHandler = useCallback(() => onToggleTodoClosed(id), [id, onToggleTodoClosed])

  const editLinked = useCallback(event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      onEditLinked(id, event.target.value);
      event.target.blur();
    }
  }, [id, onEditLinked])

  const editBlocked = useCallback(event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      onEditBlocked(id, event.target.value);
      event.target.blur();
    }
  }, [id, onEditBlocked])

  const editColor = useCallback(event => {
      event.preventDefault();
      onEditColor(id, event.target.value);
      event.target.blur();
  }, [id, onEditColor])

  return (
    <li className="li" >
      <Card className={classes.root} style={{ backgroundColor: closed ? 'grey' : notStarted ? 'red' : 'lightgreen' }}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            <div id="dot" style={{ backgroundColor: color }}></div>
            <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{todo}</p>
            <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>Description : {description}</p>
            <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>Priority : {priority}</p>
            <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>Deadline : {deadline}</p>
            <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>Time_estimated : {time_estimated}</p>
            <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>Image : {image}</p>
            <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>Labels : {labels}</p>
            <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>Indicators : {indicators}</p>

            <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}> Linked to : {linked}</p>
            <form>
              <input
                disabled={false}
                placeholder="Linked to"
                onKeyDown={editLinked}
                tagname='p'
              />
              <span>Press enter to submit Linked to</span>
            </form>
            <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}> Blocked by : {blocked}</p>
            <form>
              <input
                disabled={false}
                placeholder="Blocked by"
                onKeyDown={editBlocked}
                tagname='p'
              />
              <span>Press enter to submit Blocked By</span>
            </form>
            <p></p>
            <form>
              <select
                disabled={false}
                placeholder="Color"
                onChange={editColor}
                tagname='p'
              >
                <option value="white">None</option>
                <option id="yellow" value="yellow">Yellow</option>
                <option id="pink" value="deeppink">Pink</option>
                <option id="orangered" value="orangered">Orange</option>
                <option id="blue" value="Blue">Blue</option>
              </select>
              <span>Choose your color to indicator</span>
            </form>
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={toggleTodoDoneHandler}>{`Mark as ${isDone ? 'pending' : 'done'}`}</Button>
          <Button variant="contained" onClick={toggleTodoNotStartedHandler}>{`Mark as ${notStarted ? 'in progress' : 'not started'}`}</Button >
          <Button variant="contained" onClick={toggleTodoClosedHandler}>{`Mark as ${closed ? 'open' : 'closed'}`}</Button >
          <Button variant="contained" onClick={removeTodoHandler}>Remove</Button >
        </CardActions>
      </Card>
    </li>
  )
};

export default TodoItemTask