import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.getQiitaPosts = this.getQiitaPosts.bind(this);
    this.state = {
      query: 'React'  // 検索したいワード
    }
  }

  getQiitaPosts() {
    axios.get('https://qiita.com/api/v2/items', {
        params: {
          "page": "1",
          "per_page": "20",
          "query": this.state.query,
        }
    }).then( response => {
      const data = response.data[0];
      console.log(response)
      this.setState({
        title: data.title,
        url: data.url,
      });
      console.log(response, "ressponse");
      console.log(this.state.title, "title")
      console.log(this.state.url, "url")
    })
    .catch( err => {
        console.error(err);
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Qiita API Service</h1>
        <p> title: { this.state.title } </p>
        <p> URL: <a target="__blank" href={this.state.url}> { this.state.url } </a></p>
        <input type="button" value="検索" onClick={() => this.getQiitaPosts()} />
      </div>
    )
  }
}

export default App;