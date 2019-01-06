import React, { Component } from 'react';
import './App.css';
import TrendGit from './TrendGit';

function toJson(data) {
  return data.json();
}

function printError(e){
  console.error(e);
}

class App extends Component {
  state = {
    repo: null,
  }

  componentDidMount(){
    fetch('https://github-trending-api.now.sh/repositories').then(toJson).then(data => this.setState({repo: data})).catch(printError);
  }

  render() {
    const data = this.state.repo;
   
    return (
      <div className="App">
        <header className="App-header">
        < TrendGit data={data} />
        </header>
      </div>
    );
  }
}

export default App;
