import React from "react";
import {useNavigate} from 'react-router-dom';

const Dash = () =>{
    const navigate = useNavigate();
    return(
        <>
            <h1>welcome to dashbaord</h1>
            <button onClick={() => navigate("/home")}></button>
        </>
    )
}
export default Dash;