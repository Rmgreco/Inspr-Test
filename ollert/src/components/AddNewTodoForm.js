import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  input: {
    display: 'none',
  },
}));

const AddNewTodoForm = ({ onAddTodo }) => {
  const classes = useStyles();
  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      todo: '',
    },
    validationSchema: Yup
      .object()
      .shape({
        todo: Yup.string()

          .required('Todo text is required.')
      }
      ),
    onSubmit: (values, { resetForm }) => {
      onAddTodo(values.todo);


      resetForm();
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className={classes.root}>
      <TextField
        id="outlined-basic todo"
        label="List"
        variant="outlined"
        name="todo"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.todo} />
      <Button type="submit" className="inputs" variant="contained">Submit</Button>
    </form>
  )
};

export default AddNewTodoForm;