// src/pages/Books.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);

  console.log('books : ', books);
  useEffect(() => {
    axios.get('https://669feb32b132e2c136ff909d.mockapi.io/api/v1/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the books!', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://669feb32b132e2c136ff909d.mockapi.io/api/v1/books/${id}`)
      .then(() => {
        setBooks(books.filter(book => book.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the book!', error);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Books</h1>
      <Link to="/create-book" className="btn btn-primary mb-3">Add Book</Link>
      <ul className="list-group">
        {books.map(book => (
          <li key={book.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              {book.title} by {book.author} (ISBN: {book.isbn}) Date {    book.publicationDate}
            </span>
            <div>
              <Link to={`/edit-book/${book.id}`} className="btn btn-warning btn-sm mr-2">Edit</Link>
              <button onClick={() => handleDelete(book.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
