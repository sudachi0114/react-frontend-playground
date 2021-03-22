import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar'
import QiitaService from "./QiitaService"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="mx-auto" style={{width: "80%"}}>

          <Router>
            <div>
              <Navbar /> 

              <Route exact path='/' component={Home} />
              <Route path='/qs' component={QiitaService} />
            </div>
          </Router>

        </div>
      </div>
    )
  }
}

export default App;