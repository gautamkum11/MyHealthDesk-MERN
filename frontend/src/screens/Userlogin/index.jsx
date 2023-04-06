import React, { useState } from "react";
import "./styles2.css";
import g4 from "./g4.png"
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Userlogin() {
    const navigate = useNavigate();
    const [anumber,setanumber] = useState("");

    const handleclick = async(event) => {
        event.preventDefault();
        if(anumber) {
            try{
                await axios.post("http://localhost:5000/ulogin",{
                    anumber
                }).then((res) => {
                    // console.log(res.data);
                    if(res.data.message === "/addpatient")
                    navigate(res.data.message);
                    else 
                    {
                        navigate(res.data.message,{
                            state: {
                                name: res.data.name,
                                aadhar: res.data.aadharNumber,
                                gender : res.data.gender,
                                blood: res.data.bloodGroup,
                                birth: res.data.dob,
                                age: res.data.age
                            }
                        })
                    }
                })
            }catch(err) {
                console.log(err);
            }
        }   
        else 
        {
            alert("Invalid Input");
        } 
    }

    return (
        <div className= "ulogin-1">
            <div className = "ulogin-2">
                <img src = {g4} alt = "" className = "uloginimg" />
                <div className = "ulogin-3">
                    <h1 className = "ulogin-3-1">My HealthDesk</h1>
                    <h2 className = "ulogin-3-2">Register/Sign In</h2>
                    <p className = "ulogin-3-3">Register or Sign In to access your personalized health performa</p>
                    <form style = {{width : "85%", marginBottom : "30px"}}>
                        <h5 className = "formlabel">AADHAR NUMBER</h5>
                        <div className = "form-1">
                            {/* <h4 className = "formprefix">+91</h4>
                            <div className = "verticalline"></div> */}
                            <input className = "forminput" type = "text" placeholder = "Enter Aadhar Number" name = "anumber" value = {anumber} onChange = {(e) => setanumber(e.target.value)} />
                        </div>
                        <a href = "/" onClick = {handleclick} className = "ulogin-5">SUBMIT</a>
                    </form>
                    <a className = "ulogin-back" href = "/"> {"< "}Back</a>
                </div>
            </div>
        </div>
    );
}

export default Userlogin;