import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '', // 検索したいワード
    };

    this.handleChange = this.handleChange.bind(this);
    this.getQiitaPosts = this.getQiitaPosts.bind(this);
  }

  handleChange(event) {
    this.setState( {keyword: event.target.value} );
    console.log("state.keyword : " + this.state.keyword)
  }

  getQiitaPosts(event) {
    // alert('検索キーワードを受け取りました。検索します。')
    event.preventDefault();

    console.log(this.state.keyword)
    axios.get('https://qiita.com/api/v2/items', {
        params: {
          "page": "1",
          "per_page": "20",
          "query": this.state.keyword, // this.state.query,
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
        <form onSubmit={this.getQiitaPosts}>
          <label>
            検索キーワード
            <input type="text" name="検索キーワード" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="検索" />
        </form>
        <p> title: { this.state.title } </p>
        <p> URL: <a target="__blank" href={this.state.url}> { this.state.url } </a></p>
      </div>
    )
  }
}

export default App;