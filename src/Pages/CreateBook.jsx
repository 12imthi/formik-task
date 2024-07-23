import React from 'react';
import BookForm from '../components/BookForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBook = () => {
  const initialValues = {
    name: '',
    type: '',
    available: false,
  };

  const navigate = useNavigate();

  const onSubmit = (values) => {
    axios.post('https://669feb32b132e2c136ff909d.mockapi.io/api/v1/books', values)
      .then(response => {
        console.log('Book created successfully!', response.data);
        navigate('/books');  // Navigate to the books page after successful creation
      })
      .catch(error => {
        console.error('There was an error creating the book!', error);
      });
  };

  return (
    <div className="container mt-4">
      <h1>Create Book</h1>
      <BookForm initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  );
};

export default CreateBook;
