import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter
} from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import Main from "./pages/Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userIsLoggedIn: false };
    this.login = this.login.bind(this);
  }

  login = password => {
    // verify pw
    console.log(password);
    this.setState({ userIsLoggedIn: true });
  };

  render() {
    return (
      <div>
        {!this.state.userIsLoggedIn && <LoginSignup login={this.login} />}
        {this.state.userIsLoggedIn && <Main />}
      </div>
    );
  }
  
}
export default App;
