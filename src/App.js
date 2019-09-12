import React, {Component} from 'react';
import './App.css';
import Header from './component/header';
import Main from './containers/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Main />
        </main>
      </div>
    );
  }
}

export default App;
