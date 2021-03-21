import React, { Component } from 'react';
import Navbar from './Navbar'
import QiitaService from "./QiitaService"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="mx-auto" style={{width: "80%"}}>

          <Navbar />

          <QiitaService />

        </div>
      </div>
    )
  }
}

export default App;