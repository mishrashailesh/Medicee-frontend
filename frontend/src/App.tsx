import './App.css';
import React, { Component } from 'react';
// import Signup from './component/signup';
// import Signin from './component/signin';
// import Forget from './component/forget_psswrd';
import Router from './component/router';

class App extends Component{
  render(){
    return(
      <div>
      <Router />
    </div>
    )
  }
}

export default App;
