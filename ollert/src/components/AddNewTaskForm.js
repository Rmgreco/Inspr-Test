import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../App.css';
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

const AddNewTaskForm = ({ onAddTask }) => {
  const classes = useStyles();
  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      todo: '',
      description: '',
      priority: '',
      deadline: '',
      time_estimated: '',
      image: '',
      labels: '',
      indicators: '',
      linked: ''
    },
    validationSchema: Yup
      .object()
      .shape({
        todo: Yup.string()
          .required('Todo text is required.'),
        description: Yup.string()
          .required('description text is required.'),
        priority: Yup.string()
          .required('priority text is required.'),
        deadline: Yup.string()
          .required('deadline text is required.'),
        time_estimated: Yup.string()
          .required('time_estimated text is required.'),
      }

      ),
    onSubmit: (values, { resetForm }) => {
      onAddTask(values.todo, values.description, values.priority, values.deadline,
        values.time_estimated, values.image, values.labels, values.indicators);

      resetForm();
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className={classes.root} noValidate autoComplete="off">
      <TextField 
        id="outlined-basic todo"
        label="Task"
        variant="outlined"
        name="todo"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.todo} />
      <TextField 
        id="outlined-basic description"
        label="Description"
        variant="outlined"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description} />
      <TextField 
        id="outlined-basic priority"
        label="Priority"
        variant="outlined"
        name="priority"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.priority} />
      <TextField 
        id="outlined-basic deadline"
        label="Deadline"
        variant="outlined"
        name="deadline"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.deadline} />
      <TextField 
        id="outlined-basic time_estimated"
        label="Time estimated"
        variant="outlined"
        name="time_estimated"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.time_estimated} />
      <TextField 
        accept="image/*"
        id="outlined-basic image"
        label=""
        variant="outlined"
        name="image"
        type="file"
        onChange={formik.handleChange}
        value={formik.values.image} />
      <TextField 
        id="outlined-basic labels"
        label="labels"
        variant="outlined"
        name="labels"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.labels} />
      <TextField 
        id="outlined-basic indicators"
        label="indicators"
        variant="outlined"
        name="indicators"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.indicators} />
      <Button type="submit" className="inputs" variant="contained">Submit</Button>
    </form>
  )
};

export default AddNewTaskForm;