// src/pages/EditAuthor.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';

const EditAuthor = () => {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({
    name: '',
    birthDate: '',
    biography: '',
  });

  useEffect(() => {
    axios.get(`https://simple-books-api.glitch.me/${id}`)
      .then(response => {
        setInitialValues(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the author!', error);
      });
  }, [id]);

  const onSubmit = (values) => {
    axios.put(`/api/authors/${id}`, values)
      .then(response => {
        console.log('Author updated successfully!', response.data);
      })
      .catch(error => {
        console.error('There was an error updating the author!', error);
      });
  };

  return (
    <div>
      <h1>Edit Author</h1>
      <AuthorForm initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  );
};

export default EditAuthor;
