import React ,{useState} from "react";
import Navbar from "../../components/Navbar";
import "./styles7.css";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import axios from "axios";

function Editrecord() {
    const location = useLocation();
    const [description, setDescription] = useState('')
    const [attendedBy, setAttendedBy] = useState('')
    const [date, setDate] = useState('')
    const [report, setReport] = useState('')

    const handlesubmit = async(event) => {
        event.preventDefault();
        const id = location.state.id;
        const aadhar = location.state.aadhar;
        if(description && attendedBy && date && report)
        {
            try {
                await axios.post("http://localhost:5000/updaterecord" ,{
                    description,attendedBy,date,report,aadhar,id
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
            <div className = "er-1">
                <Link to = "/hospitaldashboard">
                    <a className = "er-2" href ='/hospitaldashboard'>{'< '}Back</a>
                </Link>
                <h1 className = "er-3">Edit Record</h1>
                <div className="er-4">
                    <form className = "er-form">
                    <div className = "er-5">
                        <h5 className= "er-6">DESCRIPTION</h5>
                        <input className = "er-7"
                        type='text'
                        placeholder='Enter check up/consultation/test details'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className = "er-5">
                        <h5 className= "er-6">ATTENDED BY</h5>
                        <input className = "er-7"
                        type='text'
                        placeholder='Enter doctor/attendent name'
                        value={attendedBy}
                        onChange={(e) => setAttendedBy(e.target.value)}
                        />
                    </div>
                    <div className = "er-5">
                        <h5 className= "er-6">DATE</h5>
                        <input className = "er-7"
                        type='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className = "er-5">
                        <h5 className= "er-6">PATIENT REPORT</h5>
                        <input className = "er-7"
                        type='text'
                        value={report}
                        onChange={(e) => setReport(e.target.value)}
                        />
                    </div>
                    <button className = "er-9"
                        type='submit'
                        onClick = {handlesubmit}
                    >
                        Update Record
                    </button>
                    </form>
                {/* )} */}
                </div>
            </div>
        </>
    );
}

export default Editrecord;