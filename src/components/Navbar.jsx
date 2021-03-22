import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Navbar</a>
          <Link to="/">Home</Link>
          <Link to="/qs">QiitaService</Link>
        </div>
      </nav>
    )
  }
}

export default Navbar;