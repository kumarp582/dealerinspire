import React, { Component } from 'react';
import './css/App.css';
import Search from './components/Search';
import UserDetail from './components/UserDetail';
import { BrowserRouter as Router, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
              <Route exact path="/" component={Search} />
              <Route exact path="/users" component={Search} />
              <Route exact path="/users/:userId" component={UserDetail} />
          </div>
      </Router>
    );
  }
}

export default App;
