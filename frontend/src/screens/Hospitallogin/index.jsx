import React, { useState } from "react";
import "./styles1.css";
import g2 from "./g2.png";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Hospitallogin() {
    const navigate = useNavigate();
    const [hlogininfo, sethlogininfo] = useState({
        rnumber : "",
        password : ""
    })

    let name,val;
    const handlechange = (event) => {
        name = event.target.name;
        val = event.target.value;
        sethlogininfo({...hlogininfo,[name]:val});
    }

    const handleclick = async(event) => {
        event.preventDefault();
        const {rnumber,password} = hlogininfo;
        if(rnumber && password) 
        {
            try{
                await axios.post("http://localhost:5000/hlogin",{
                rnumber,password
                }).then((res) => {
                    navigate("/hospitaldashboard",{
                        state: {
                            name : res.data.name,
                            contact : res.data.contact,
                            address : res.data.address,
                            registration : res.data.registration
                        }
                    });
                })
            }catch (err) {
                alert("Incorrect Password");
            }
        }
        else 
        {
            alert("Invalid Input");
        }
    }

    return (
        <div className= "hlogin-1">
            <div className = "hlogin-2">
                <div className = "hlogin-3">
                    <h1 className = "hlogin-3-1">My HealthDesk</h1>
                    <h2 className = "hlogin-3-2">Hospital Login</h2>
                    <p className = "hlogin-3-3">Login to access your hospital dashboard</p>
                    <form style = {{width : "85%", marginBottom : "10px"}}>
                        <h5 className = "formlabel">REGISTRATION NUMBER</h5>
                        <div className = "form-1">
                            <input className = "forminput" value = {hlogininfo.rnumber}  name = "rnumber" onChange= {handlechange} />
                        </div>
                        <p className = "formlabel">PASSWORD</p>
                        <div className = "form-1">
                            <input className = "forminput" value = {hlogininfo.password} name = "password" onChange= {handlechange} />
                        </div>
                        <button className = "hlogin-5" onClick = {handleclick} >Register</button>
                    </form>
                    <p className = "hlogin-4">Not registered yet?
                        <a className = "hlogin-register" href = "/hospitaldashboard"> Register</a></p>
                    <a className = "hlogin-back" href = "/"> {"< "}Back</a>
                </div>
                <img src = {g2} alt = "" className = "hloginimg" />
            </div>
        </div>
    );
}

export default Hospitallogin;