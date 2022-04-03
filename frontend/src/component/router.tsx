import React, { Component } from "react";
import {Route, Routes} from 'react-router-dom';
import Signup from './signup';
import Signin from './signin';
import Forget from './forget_psswrd';
import Home from "./home";
// import Home from './home';

class Router extends Component{
    render(){
        return(
            <div>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/signin" element={<Signin />}/>
                    <Route path="/signup" element={<Signup />}/>
                    <Route path="/forget_psswrd" element={<Forget />}/>
                </Routes>
            </div>
        );
    }
};
export default Router;
