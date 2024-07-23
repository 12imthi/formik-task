// src/components/BookForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ initialValues, onSubmit,enableReinitialize  }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    isbn: Yup.string().required('Required'),
    publicationDate: Yup.date().required('Required'),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}  enableReinitialize={enableReinitialize} >
      <Form className="container mt-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <Field name="title" type="text" className="form-control" />
          <ErrorMessage name="title" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <Field name="author" type="text" className="form-control" />
          <ErrorMessage name="author" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="isbn" className="form-label">ISBN</label>
          <Field name="isbn" type="text" className="form-control" />
          <ErrorMessage name="isbn" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="publicationDate" className="form-label">Publication Date</label>
          <Field name="publicationDate" type="date" className="form-control" />
          <ErrorMessage name="publicationDate" component="div" className="text-danger" />
        </div>
        <button type="submit" className="btn btn-primary mb-4">Submit</button>
      </Form>
    </Formik>
  );
};

export default BookForm;
