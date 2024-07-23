import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    birthDate: Yup.date().required('Required'),
    biography: Yup.string().required('Required'),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" className="form-control" />
          <ErrorMessage name="name" component="div" className="text-danger" />
        </div>
        <div className="form-group">
          <label htmlFor="birthDate">Birth Date</label>
          <Field name="birthDate" type="date" className="form-control" />
          <ErrorMessage name="birthDate" component="div" className="text-danger" />
        </div>
        <div className="form-group">
          <label htmlFor="biography">Biography</label>
          <Field name="biography" as="textarea" className="form-control" />
          <ErrorMessage name="biography" component="div" className="text-danger" />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </Form>
    </Formik>
  );
};

export default AuthorForm;
