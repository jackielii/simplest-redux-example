import React, {Component} from 'react';
import Header from './component/header';
import Main from './containers/main';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="container">
          <Main />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
