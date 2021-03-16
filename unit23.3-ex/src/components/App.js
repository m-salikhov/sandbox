import React from 'react';
import '../styles/App.css';

let userName = 'Maks';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {userName}</h1>
      </div>
    );
  }
}

export default App;
