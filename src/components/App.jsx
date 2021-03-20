import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '', // 検索したいワード
      datas: [],
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
      const datas = response.data;
      this.setState({
        datas: datas,
      });
      console.log("ressponse:", response);
      console.log("datas:", this.state.datas);
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

        <h2> 検索結果: {this.state.keyword} </h2>
        <ul>{ this.state.datas.map( (data) => {
            return <li> { data.title } </li>
        } ) }</ul>
        {/* <p> title: { this.state.datas[0].title } </p>
        <p> URL: <a target="__blank" href={this.state.datas[0].url}> { this.state.datas[0].url } </a></p> */}
      </div>
    )
  }
}

export default App;