import './App.css';
import React from 'react';
import Signup from './component/signup';
import Signin from './component/signin';
import Forget from './component/forget_psswrd';
 



var App:React.FC=()=>(

    <div className="App">
      {/* <Signin /> */}
      <Signup />
      {/* < Forget/> */}
    </div>

)

export default App;
