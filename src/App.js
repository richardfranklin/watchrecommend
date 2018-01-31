import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import WatchType from './containers/watch_type';
import WatchYear from './containers/watch_year';
import SearchResults from './containers/search_results';

class App extends Component {
  render() {
    return (
      <div>
        <WatchType />
        <br /><br />

        <h4>From</h4>
        <WatchYear scale="From" />
        
        <h4>To</h4>
        <WatchYear scale="To" />
        
        <br /><br />
        <SearchResults />
      </div>
    );
  }
}

export default App;
