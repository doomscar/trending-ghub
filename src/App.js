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
    const txt = this.state.repo;
    /*if(txt){
      console.log(txt[0]);
    }*/
    
    return (
      <div className="App">
        <header className="App-header">
        < TrendGit data={txt}/>
          <p>
            {/*txt ? txt[0].name: ""*/}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
