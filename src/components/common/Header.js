import React from 'react';
import { Link, IndexRoute } from 'react-router';

const Header = () => {
  return (
    <nav>
      <Link to="/" activeClassName="active">Home</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
    </nav>
  );
};

export default Header;
