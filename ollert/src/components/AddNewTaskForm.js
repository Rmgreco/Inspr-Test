import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../App.css';

const AddNewTaskForm = ({ onAddTask }) => {
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
      onAddTask(values.todo, values.description, values.priority,  values.deadline,
        values.time_estimated, values.image, values.labels, values.indicators);

      resetForm();
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <label className="label">Task:</label>
      <input className="inputs"
        id="todo"
        name="todo"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.todo}
        autoComplete="off"
      />
      <label className="label">Description:</label>
      <input className="inputs"
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
        autoComplete="off"
      />
      <label className="label">Priority:</label>
      <input className="inputs"
        id="priority"
        name="priority"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.priority}
        autoComplete="off"
      />
      <label className="label">Deadline:</label>
      <input className="inputs"
        id="deadline"
        name="deadline"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.deadline}
        autoComplete="off"
      />
      <label className="label">Time_estimated:</label>
      <input className="inputs"
        id="time_estimated"
        name="time_estimated"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.time_estimated}
        autoComplete="off"
      />
      <label className="label">Image:</label>
      <input className="inputs"
        id="image"
        name="image"
        type="file"
        onChange={formik.handleChange}
        value={formik.values.image}
        autoComplete="off"
      />
      <label className="label">Labels:</label>
      <input className="inputs"
        id="labels"
        name="labels"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.labels}
        autoComplete="off"
      />
      <label className="label">Indicators:</label>
      <input className="inputs"
        id="indicators"
        name="indicators"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.indicators}
        autoComplete="off"
      />
      
      <button type="submit" className="inputs">Submit</button>
    </form>
  )
};

export default AddNewTaskForm;