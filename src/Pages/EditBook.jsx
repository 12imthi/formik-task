import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookForm from '../components/BookForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditBook = () => {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({
    name: '',
    type: '',
    available: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://669feb32b132e2c136ff909d.mockapi.io/api/v1/books/${id}`)
      .then(response => {
        setInitialValues(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the book!', error);
      });
  }, [id]);

  const onSubmit = (values) => {
    axios.put(`https://669feb32b132e2c136ff909d.mockapi.io/api/v1/books/${id}`, values)
      .then(response => {
        console.log('Book updated successfully!', response.data);
        navigate('/books'); 
      })
      .catch(error => {
        console.error('There was an error updating the book!', error);
      });
  };

  return (
    <div className="container mt-4">
      <h1>Edit Book</h1>
      <BookForm initialValues={initialValues} onSubmit={onSubmit} enableReinitialize />
    </div>
  );
};

export default EditBook;
