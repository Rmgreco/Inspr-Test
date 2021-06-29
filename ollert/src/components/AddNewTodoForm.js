import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddNewTodoForm = ({ onAddTodo }) => {
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
    <form onSubmit={formik.handleSubmit}>
      <label>Add list:</label>
      <input
        id="todo"
        name="todo"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.todo}
        autoComplete="off"
      />
      <button type="submit">Submit</button>
    </form>
  )
};

export default AddNewTodoForm;