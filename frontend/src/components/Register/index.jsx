import React, { useState } from "react";
import "./styles.css";
import g1 from "./g1.png";
import axios from "axios";

function Register() {

    const [hospital,sethospital] = useState({
        name : "",
        email : "",
        address : "",
        contact : "",
        registration : "",
        password : ""
    });

    let name,value;
    function handlechange(event) {
        name = event.target.name;
        value = event.target.value;
        sethospital({...hospital,[name]:value});
    }

    const handleclick= async(event) => {
        event.preventDefault();
        const {name , email, address, contact, registration, password} = hospital;

        if(name && email && address && contact && registration && password)
        {
            try {
                await axios.post("http://localhost:5000/" ,{
                    name,email,address,contact,registration,password
                })
                .then((res) => {
                    alert(res.data.message);
                    console.log(res.data);
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
        <div id="contact" className="contact-1">
            <div className="contact-2">
                <img src= {g1} className = "contactimg" alt = "registerimg" />
                <div className="contact-3">
                    <h1 className = "registertitle">REGISTER HERE!!</h1>
                    <div style={{width: "100%"}}>
                        <p className="contact-4">If Hospital is not registered!!!</p>
                    </div> 
                    <form style={{width: "100%"}} action="/" method="post">
                        <div className="contact-5">
                            <p className = "formlabel">NAME OF HOSPITAL</p>
                            <input type="text" placeholder="Enter Name of your Hospital" className="contact-6" value = {hospital.name} name="name" onChange = {handlechange} />
                        </div>
                        <div className="contact-5">
                            <p className = "formlabel">EMAIL ADDRESS</p>
                            <input type="email" placeholder="Enter email" className="contact-6" name="email" value = {hospital.email} onChange = {handlechange} />
                        </div>
                        <div className="contact-5">
                            <p className = "formlabel">ADDRESS</p>
                            <input type="text" placeholder="Enter address" className="contact-6" name="address" value = {hospital.address} onChange = {handlechange} />
                        </div>
                        <div className="contact-5">
                            <p className = "formlabel">REGISTRATION ID</p>
                            <input type="text" placeholder="Enter registration id" className="contact-6" name="registration" value = {hospital.registration} onChange = {handlechange} />
                        </div>
                        <div className="contact-5">
                            <p className = "formlabel">CONTACT</p>
                            <input type="number" placeholder="Enter contact" className="contact-6" name="contact" value = {hospital.contact} onChange = {handlechange} />
                        </div>
                        <div className="contact-5">
                            <p className = "formlabel">SET PASSWORD</p>
                            <input type="password" placeholder="Enter password" className="contact-6" name="password" value = {hospital.password} onChange = {handlechange} />
                        </div>
                        <button type="submit" className="contact-8" onClick = {handleclick}>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;