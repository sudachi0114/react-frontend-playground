import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.getQiitaPosts = this.getQiitaPosts.bind(this);

    this.state = {
      query: 'React', // 検索したいワード
      keyword: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState( {keyword: event.target.value} );
    console.log("state.keyword" + this.state.keyword)
  }

  handleSubmit(event) {
    alert('検索キーワードが送信されました:' + this.state.keyword);
    event.preventDefault();
  }

  getQiitaPosts() {
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
        <form onSubmit={this.handleSubmit}>
          <label>
            検索キーワード
            <input type="text" name="検索キーワード" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="検索" onClick={() => this.getQiitaPosts()} /> 
        </form>
        <p> title: { this.state.title } </p>
        <p> URL: <a target="__blank" href={this.state.url}> { this.state.url } </a></p>
      </div>
    )
  }
}

//  onClick={(keyword) => this.getQiitaPosts(keyword)} 

export default App;