import React, {useState}  from "react";
import Navbar from "../../components/Navbar";
import { UilSignOutAlt } from '@iconscout/react-unicons'
import "./styles3.css";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

function Hospitaldashboard() {
    const location = useLocation();
    const navigate = useNavigate();
    const [opt,setopt] = useState("New Record");
    const [anumber,setaadhar] = useState("");

    function handleselect(event) {
        const k = event.target.value;
        setopt(k);
    }

    function handlechange(event) {
        const k = event.target.value;
        setaadhar(k);
    }

    const handleclick = async(event) => {
        event.preventDefault();
        // console.log(aadhar);
        if(opt === "New Record")
        {
            try{
                await axios.post("http://localhost:5000/ulogin",{
                    anumber
                }).then((res) => {
                    //console.log(res.data);
                    if(res.data.message === "/addpatient")
                    {
                        navigate(res.data.message);
                    }
                    else
                    {
                        navigate("/newrecord",{
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
            try{
                await axios.post("http://localhost:5000/ulogin",{
                    anumber
                }).then((res) => {
                    // console.log(res.data);
                    if(res.data.message === "/addpatient")
                    {
                        navigate(res.data.message);
                    }
                    else
                    {
                        navigate("/viewrecord",{
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
    }

    return (
        <>
        <Navbar />
        <div className= "hd-1">
            <div className = "hd-2">
                <div className = "hd-3" >
                    <div className = "hd-4">
                    {/* <HospitalIconImage/> */}
                    {location.state.name}
                    {/* {hospitalInfo && hospitalInfo.name} */}
                    </div>
                    <div className = "hd-5" />
                </div>
                <a href = "/" className = "hd-6">
                    <UilSignOutAlt size='25' />
                    Logout
                </a>
            </div>
            <div className = "hd-7">
                <div className = "hd-8">
                    <div className = "hd-9">
                    {/* <div className = "hd-10"
                        // src={InfoIcon}
                        // width={20}
                        // height={20}
                        // alt='Info Icon'
                    /> */}
                    <h1 className = "hd-11">Info</h1>
                    </div>
                    <div className = "hd-12">
                    <p className = "hd-13">REGISTRATION NUMBER</p>
                    <div className = "hd-14">
                        {location.state.registration}
                        {/* {hospitalInfo && hospitalInfo.registrationNumber} */}
                    </div>
                    </div>
                    <div className = "hd-12">
                    <p className = "hd-13">ADDRESS</p>
                    <div className = "hd-14">
                        {location.state.address}
                        {/* {hospitalInfo && hospitalInfo.address} */}
                    </div>
                    </div>
                    <div className = "hd-12">
                    <p className = "hd-13">PHONE NUMBER</p>
                    <div className = "hd-14">
                        {location.state.contact}
                        {/* {hospitalInfo && hospitalInfo.phoneNumber} */}
                    </div>
                    </div>
                </div>
                <div className = "hd-15">
                    <div className = "hd-9">
                    {/* <div className = "hd-10"
                        // src={ManageProfileIcon}
                        // width={40}
                        // height={40}
                        // alt='Manage Profile Icon'
                    /> */}
                    <h1 className = "hd-11">Manage Profile</h1>
                    </div>
                    <form className = "hd-16">
                    <div className = "hd-17">
                        <p className = "hd-18">AADHAR NUMBER</p>
                        <input className = "hd-21"
                        type='number'
                        placeholder='Enter aadhar number'
                        value = {anumber}
                        // name = "aadhar"
                        onChange = {handlechange}
                        />
                    </div>
                    <div className = "hd-17">
                        <p className = "hd-18">SELECT ACTION</p>
                        <select className = "hd-19"
                            // method ='Action'
                            value = {opt}
                            onChange = {handleselect}
                        >
                        <option value='New Record'>New Record</option>
                        <option value='View Records'>View Records</option>
                        </select>
                    </div>
                    <button className = "hd-20"
                        // type='submit'
                        onClick = {handleclick}
                    >
                    PROCEED >
                    </button>
                    </form>
                </div>
                </div>
                <div className = "hd-22">
                    <div className = "hd-23">
                        {/* <InstructionHeadingIcon
                        src={ImportantInstructionsIcon}
                        width={30}
                        height={30}
                        alt='Instruction Heading Icon'
                        /> */}
                        <div className = "hd-24">Important Instructions</div>
                    </div>
                    <ol style = {{padding : "5px 20px"}}>
                        <li className = "list">Patient must have a valid Aadhar Number</li>
                        <li className = "list">
                        Patient's Aadhar number must be registered on Health Dock through
                        a valid phone number
                        </li>
                        <li className = "list">Documents must be in .png, .jpeg or .jpg format</li>
                        <li className = "list">
                        Document will not be recovered if once edited or deleted
                        </li>
                        <li className = "list">
                        Patient will be notified through SMS if any changes are done in
                        their records
                        </li>
                    </ol>
                </div>
        </div>
        </>
    );
}

export default Hospitaldashboard;