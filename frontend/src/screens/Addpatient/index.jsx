import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import "./styles8.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function Addpatient() {
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [aadharNumber, setAadharNumber] = useState('');
    const [gender, setGender] = useState('Male');
    const [dob, setDob] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [age, setAge] = useState('');

    const handlesubmit = async(event) => {
        event.preventDefault();
        if(name && aadharNumber && gender && dob && bloodGroup && age) 
        {
            try{
                await axios.post("http://localhost:5000/addnewpatient",{
                name,aadharNumber,gender,dob,bloodGroup,age
                }).then((res) => {
                    alert(res.data.message);
                    navigate("/userdashboard",{
                        state: {
                            name: name,
                            aadhar: aadharNumber,
                            gender : gender,
                            blood: bloodGroup,
                            birth: dob,
                            age: age
                        }
                    })
                })
            }catch (err) {
                console.log(err);
            }
        }
        else 
        {
            alert("Invalid Input");
        }
    }

    return (
        <>
            <Navbar />
            <div className ="ap-1">
            <a className = "ap-2" href='/'>{'< '}Back</a>
            <h1 className = "ap-3">New Patient</h1>
            {/* {errorUpdate && <Alert error message={errorUpdate} />} */}
            <div className = "ap-4">
            {/* {loadingDetails ? (
                <Spinner width={60} height={60} color='#000' />
            ) : errorDetails ? (
                <Alert error message={errorDetails} />
            ) : ( */}
                <form className = "ap-5">
                <div className = "ap-6">
                    <h5 className = "ap-7">FULL NAME</h5>
                    <input className = "ap-8"
                    type='text'
                    placeholder='Enter full name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className = "ap-6">
                    <h5 className = "ap-7">AADHAR NUMBER</h5>
                    <input className = "ap-8"
                    type='number'
                    placeholder='Enter aadhar number'
                    value={aadharNumber}
                    onChange={(e) => setAadharNumber(e.target.value)}
                    />
                </div>
                <div style = {{display : "flex",justifyContent: "space-between",columnGap : "20px"}}>
                    <div className = "ap-6">
                    <h5 className = "ap-7">DOB</h5>
                    <input className = "ap-8"
                        type='date'
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                    </div>
                    <div className = "ap-6">
                    <h5 className = "ap-7">AGE</h5>
                    <input className = "ap-8"
                        type='number'
                        placeholder='Enter age'
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    </div>
                </div>
                <div style = {{display : "flex",justifyContent: "space-between",columnGap : "20px"}}>
                    <div className = "ap-6">
                    <h5 className = "ap-7">GENDER</h5>
                    <select className = "ap-9"
                        name='Gender'
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Other'>Other</option>
                    </select>
                    </div>

                    <div className = "ap-6">
                    <h5 className = "ap-7">BLOOD GROUP</h5>
                    <input className = "ap-8"
                        type='text'
                        placeholder='Enter blood group'
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                    />
                    </div>
                </div>
                <button className = "ap-10"
                    type='submit' onClick = {handlesubmit}
                >
                    'Update Member'
                </button>
                </form>
            </div>
            </div>
        </>
    );
}

export default Addpatient;