import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
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

const TodoItem = ({ todo, id, onRemoveTodo }) => {
  const classes = useStyles();
  const removeTodoHandler = useCallback(() => onRemoveTodo(id), [id, onRemoveTodo])

  return (
    <li className="lists">
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {todo}
          </Typography>
        </CardContent>
        <CardActions>
        <Link to={`/list/${todo}`}><Button variant="contained" size="small">See List</Button></Link>
        <Button size="small" onClick={removeTodoHandler}>Remove</Button>
        </CardActions>
      </Card>
    </li>
  )
};

export default TodoItem