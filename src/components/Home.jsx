import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1> React Frontend Playground </h1>

        <p> 
          Created by: <a href="https://github.com/sudachi0114"> sudachi </a>
        </p>

        <p>
          Repository is <a href="https://github.com/sudachi0114/react-frontend-playground">Here</a>
        </p>


        <Link to="/">Home</Link>
        <Link to="/qs">QiitaService</Link>

      </div>
    )
  }
}

export default Home;