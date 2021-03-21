import React, { Component } from 'react';
import QiitaService from "./QiitaService"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="mx-auto" style={{width: "80%"}}>

          <QiitaService />

        </div>
      </div>
    )
  }
}

export default App;