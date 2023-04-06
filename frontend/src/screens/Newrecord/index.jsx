import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import "./styles5.css";
import {useLocation} from "react-router-dom";
import axios from "axios";

function Newrecord() {
    const location = useLocation();
    const [description, setDescription] = useState('')
    const [attendedBy, setAttendedBy] = useState('')
    const [date, setDate] = useState('')
    const [report, setReport] = useState('')

    const toDate = (dob) => {
        const formatDOB = new Date(dob)
        return formatDOB
    }

    const handlesubmit = async(event) => {
        event.preventDefault();
        const aadhar = location.state.aadhar;
        if(description && attendedBy && date && report)
        {
            try {
                await axios.post("http://localhost:5000/newrecord" ,{
                    description,attendedBy,date,report,aadhar
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
        <>
            <Navbar />
            <div className = "nr-1">
                <a className = "nr-2" href ='/'>{'< '}Back</a>
                <div style = {{display : "flex"}}>
                <div className = "nr-3">
                    <div className = "nr-4">
                    {/* <AvatarImage src={avatarImageUrl} alt='Avatar Image' /> */}
                    <h2 className = "profilename">
                    {location.state.name}
                    </h2>
                    </div>
                    <div className = "nr-5">
                    <h4 className = "nr-6">Information:</h4>
                    <div className = "nr-7">
                        <h5 className = "nr-7-1">Age:</h5>
                        <p className = "nr-7-2">
                        {location.state.age}
                        </p>
                    </div>
                    <div className = "nr-7">
                        <h5 className = "nr-7-1">Date of Birth:</h5>
                        <p className = "nr-7-2">
                        {toDate(location.state.birth).toLocaleDateString('en-UK')}
                        </p>
                    </div>
                    <div className = "nr-7">
                        <h5 className = "nr-7-1">Gender:</h5>
                        <p className = "nr-7-2">
                        {location.state.gender}
                        </p>
                    </div>
                    <div className = "nr-7">
                        <h5 className = "nr-7-1">Blood Group:</h5>
                        <p className = "nr-7-2">
                        {location.state.blood}
                        </p>
                    </div>
                    <div className = "nr-7">
                        <h5 className = "nr-7-1">Aadhar Number:</h5>
                        <p className = "nr-7-2">
                        XXXX-XXXX-X
                        {location.state.aadhar &&
                            location.state.aadhar.toString().substring(9)}
                        </p>
                    </div>
                    </div>
                </div>
                <div className = "nr-8">
                    <div className = "nr-9">
                    <h1 className = "nr-10">Add new record</h1>
                    <form className = "nrform">
                        <div className = "nrform-1">
                        <h5 className = "nrform-2">DESCRIPTION</h5>
                        <input className = "nrform-3"
                            type='text'
                            placeholder='Enter check up/consultation/test details'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        </div>
                        <div className = "nrform-1">
                        <h5 className = "nrform-2">ATTENDED BY</h5>
                        <input className = "nrform-3"
                            type='text'
                            placeholder='Enter doctor/attendent name'
                            value={attendedBy}
                            onChange={(e) => setAttendedBy(e.target.value)}
                        />
                        </div>
                        <div className = "nrform-1">
                        <h5 className = "nrform-2">DATE</h5>
                        <input className = "nrform-3"
                            type='date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        </div>
                        <div className = "nrform-1">
                        <h5 className = "nrform-2">PATIENT REPORT</h5>
                        <input className = "nrform-3"
                            type='text'
                            value={report}
                            onChange={(e) => setReport(e.target.value)}
                        />
                        </div>
                        <button className = "submit"
                        type='submit' onClick= {handlesubmit}
                        >
                        Add Record
                        </button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Newrecord;