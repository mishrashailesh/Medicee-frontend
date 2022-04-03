import React from "react";
import './Assets/login.css';
import Lottie from 'react-lottie';
import animationData from './Assets/lotties/login-main.json';
import animationData2 from './Assets/lotties/medicee-lottie.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate } from "react-router-dom";


export default function Signin() {
    const navigate = useNavigate();

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
                    {/* <lottie-player className="main-lottie" src="https://assets6.lottiefiles.com/packages/lf20_1aqc3umv.json"  background="transparent"  speed="1" loop autoplay></lottie-player> */}
                </div>
                <div className="col-md-6 lottie-background2 lottie-padding text-center d-flex flex-column py-5 justify-content-center ">
                    <div className="auth-form-section">
                        <div className="logo d-flex">
                        <div className="medicee-lottie">
                            <Lottie options={defaultOption2}/>
                        </div>
                            {/* <lottie-player className="medicee-lottie" src="https://assets9.lottiefiles.com/temp/lf20_euwjhc.json"  background="transparent"  speed="1"  loop autoplay></lottie-player> */}
                            <h3 className="logo-heading">Medicee</h3>
                        </div>
                        <h2 className="Sign-in-heading">Sign in</h2>
                        <p className="sign-in-paragraph">Free access to our dashboard</p>
                        <form action="index.html" className="auth-form">
                            <div className="form-group">
                                <label htmlFor="username" className="sr-only">Username</label>
                                <input type="text" name="username" id="username" className="form-control" placeholder="Username" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="userPassword" className="sr-only">Password</label>
                                <input type="password" name="userPassword" id="userPassword" className="form-control" placeholder="Password" required/>
                            </div>
                            <button type="submit" onClick={() => navigate("/dashboard")} className="btn btn-customize btn-success btn-block mb-3">Sign in</button>
                            <div className="d-md-flex justify-content-between">
                                <div className="form-check">
                                    {/* <!-- <input type="checkbox" className="form-check-input" name="termsAgriment" id="termsAgriment" value="termsAgreed"> --> */}
                                    <a onClick={() => navigate("/signup")} className="text-info">Click here to register?</a>
                                </div>
                                <a onClick={() => navigate("/forget_psswrd")} className="text-info">Forgot Password?</a>
                            </div>
                            <hr className="horizon-line-padding" />

                        </form>
                        <h5 className="text-left mb-3 dribble-font">Sign in to Dribbble</h5>
                        <p className="mb-0 d-flex">
                            <a href="#" className="btn btn-customize btn-customize-color btn-light btn-block">Sign in with google</a>
                            <a href="#" className="btn icon-color ml-2 mr-2">f <i className="bi bi-facebook btn-customize btn-customize-color2"></i></a>
                            <a href="#" className="btn  btn-customize btn-customize-color3 btn-twitter">t<i className="bi bi-twitter"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
