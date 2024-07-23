// src/pages/Authors.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get('https://simple-books-api.glitch.me/books')
      .then(response => {
        setAuthors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the authors!', error);
      });
  }, []);

  return (
    <div>
      <h1>Authors</h1>
      <Link to="/create-author">Add Author</Link>
      <ul>
        {authors.map(author => (
          <li key={author.id}>
            {author.name} (Born: {author.birthDate})
            <Link to={`/edit-author/${author.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Authors;
