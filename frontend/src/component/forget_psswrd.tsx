import React from "react";
import './Assets/login.css';
import Lottie from 'react-lottie';
import animationData from './Assets/lotties/login-main.json';
import animationData2 from './Assets/lotties/medicee-lottie.json';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Forget() {

  const defaultOption = {
    loop:true,
    animation:true,
    animationData:animationData,
  }
  const defaultOption2 = {
    loop:true,
    animation:true,
    animationData:animationData2,
  }
  return (
    <>
          <div className="container-fluid">
            <div className="row vh-100">
                <div className="col-md-6 lottie-background text-center p-5 d-flex flex-column justify-content-center auth-bg-section text-white" >
                    <div className="main-lottie">
                        <Lottie options={defaultOption}/>
                    </div>
                </div>
                <div className="lottie-padding lottie-background2 col-md-6 text-center d-flex flex-column py-5 justify-content-center ">
                    <div className="auth-form-section">
                        <div className="logo d-flex">
                            <div className="medicee-lottie" >
                                <Lottie options={defaultOption2}/>
                            </div>
                            <h3 className="logo-heading">Medicee</h3>
                        </div>
                        <h2 className="Sign-in-heading">Forget Password</h2>
                        <p className="sign-in-paragraph">Free access to our dashboard</p>
                        <form action="/examples/actions/confirmation.php" method="post">
                           
                            <div className="form-group">
                                <label htmlFor="username" className="sr-only">Username</label>
                                <input type="email" className="form-control" name="email" placeholder="Email Address" required/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-customize btn-success btn-block mb-3">Get Reset Link</button>
                            </div>
                        </form>
                        <a href="login.html" className="text-info">get back to login page </a>    
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
