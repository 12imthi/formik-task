// src/pages/CreateAuthor.jsx
import React from 'react';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';

const CreateAuthor = () => {
  const initialValues = {
    name: '',
    birthDate: '',
    biography: '',
  };

  const onSubmit = (values) => {
    axios.post('https://simple-books-api.glitch.me/authors', values)
      .then(response => {
        console.log('Author created successfully!', response.data);
      })
      .catch(error => {
        console.error('There was an error creating the author!', error);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Create Author</h1>
      <AuthorForm initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  );
};

export default CreateAuthor;
