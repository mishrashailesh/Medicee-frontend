import React from "react";
import './Assets/login.css';
import Lottie from 'react-lottie';
import animationData from './Assets/lotties/login-main.json';
import animationData2 from './Assets/lotties/medicee-lottie.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";


export default function Signup() {

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
                </div>
                <div className="lottie-padding lottie-background2 col-md-6 text-center d-flex flex-column py-5 justify-content-center ">
                    <div className="auth-form-section">
                        <div className="logo d-flex">
                            <div className="medicee-lottie" >
                                <Lottie options={defaultOption2}/>
                            </div>
                            <h3 className="logo-heading">Medicee</h3>
                        </div>
                        <h2 className="Sign-in-heading">Sign up</h2>
                        <p className="sign-in-paragraph">Free access to our dashboard</p>
                        <form action="/examples/actions/confirmation.php" method="post">
                           
                            <div className="form-group">
                                <input type="text" className="form-control" name="username" placeholder="Username" required/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" placeholder="Email Address" required/>
                            </div>
                            <div className="d-flex form-group">
                                <input type="date" className="form-control adjacent-padding" name="date of birth" placeholder="DOB" required />
                                <select className="form-select">
                                    <option selected>user type</option>
                                    <option value="1">Normal user</option>
                                    <option value="2">Admin user</option>
                                   
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Password" required/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required />
                            </div>        
                            <div className="form-group">
                                <label className="form-check-label sign-in-paragraph" ><input type="checkbox" /> I accept the <a href="#" className="text-info">Terms of Use</a> &amp; <a href="#" className="text-info">Privacy Policy</a></label>
                            </div>
                            <div className="form-group">
                                <button type="submit" onClick={() => navigate("/signin")} className="btn btn-customize btn-success btn-block mb-3">Sign up</button>
                            </div>
                        </form>
                        <a onClick={() => navigate("/signin")} className="text-info">Already have an account? Click here</a>    
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
