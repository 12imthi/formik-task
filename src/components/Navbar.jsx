// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Link className="navbar-brand" to="/">Library Dashboard</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/books">Books</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/create-author">Create Author</Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/create-book">Create Book</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



