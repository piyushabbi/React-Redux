import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render () {
    return (
      <div className="jumbotron">
        <h1>Admin App</h1>
        <p>Simple React, Redux Admin App</p>
        <Link
          to="/about"
          className="btn btn-primary btn-lg">
          Learn More
        </Link>
      </div>
    );
  }
}

export default HomePage;
