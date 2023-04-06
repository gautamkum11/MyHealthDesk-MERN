import React, {useEffect, useState} from "react";
import Navbar from "../../components/Navbar";
import "./styles6.css";
import { UilTrashAlt, UilEdit } from '@iconscout/react-unicons'
import {Link} from "react-router-dom"
import { useLocation } from "react-router";
import axios from "axios";

const headingColumns = [
    'S.NO',
    'DESCRIPTION',
    'ATTENDED BY',
    'DATE',
    'REPORT',
    ''
  ]

function Viewrecord(){
    const location = useLocation();
    const [arr,setarr] = useState([]);
    // const [count, setCount] = useState(0);
    const k = location.state.aadhar;

    const toDate = (dob) => {
        const formatDOB = new Date(dob)
        return formatDOB
    }

    useEffect(() => {
        fetch("http://localhost:5000/getrecorddetails").then((result) =>{
            result.json().then((resp) => {
                // console.log(resp.record);
                setarr(resp.record);
            })
        })
    },[])

    const deleteHandler = async(id) => {
        alert("are you sure want to delete ?");
        try{
            await axios.post("http://localhost:5000/deleterecord",{
            id
            }).then((res) => {
                alert(res.data.message+"...Please Refresh");
            })
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div>
        <Navbar />
            <div className = "vr-1">
                <a className = "vr-a" href ='/hospitaldashboard'>{'< '}Back</a>
                <div className = "vr-22">
                    <div className = "vr-2">
                        <div className = "vr-3">
                        <div className = "vr-4">
                        {/* <AvatarImage src={avatarImageUrl} alt='Avatar Image' /> */}
                        <h2 className = "vr-5">
                        {location.state.name}
                        </h2>
                        </div>
                        <div className = "vr-6">
                        <h4 className = "vr-7">Information:</h4>
                        <div className = "vr-8">
                            <h5 className = "vr-8-1">Age:</h5>
                            <p className = "vr-8-2">
                            {location.state.age}
                            </p>
                        </div>
                        <div className = "vr-8">
                            <h5 className = "vr-8-1">Date of Birth:</h5>
                            <p className = "vr-8-2">
                            {toDate(location.state.birth).toLocaleDateString('en-UK')}
                            </p>
                        </div>
                        <div className = "vr-8">
                            <h5 className = "vr-8-1">Gender:</h5>
                            <p className = "vr-8-2">
                            {location.state.gender}
                            </p>
                        </div>
                        <div className = "vr-8">
                            <h5 className = "vr-8-1">Blood Group:</h5>
                            <p className = "vr-8-2">
                            {location.state.blood}
                            </p>
                        </div>
                        <div className = "vr-8">
                            <h5 className = "vr-8-1">Aadhar Number:</h5>
                            <p className = "vr-8-2">
                            XXXX-XXXX-X
                            {location.state.aadhar &&
                                location.state.aadhar.toString().substring(9)}
                            </p>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className = "vr-9">
                        <div className = "vr-10">
                        <h1 className = "vr-11">Patient Records</h1>
                            <div className = "vr-12">
                            <div className = "vr-13">
                                <table className = "vr-14">
                                <thead className = "vr-15">
                                    <tr className = "vr-16">
                                    {headingColumns.map((col, index) => (
                                        <th className ="vr-18" key={index}>{col}</th>
                                    ))}
                                    </tr>
                                </thead>
                                <tbody>
                                     {arr && arr.map((record, index) => { 
                                         if(record.aadhar === k) {
                                             return (
                                                <tr className = "vr-16" key=
                                                {index}
                                                >
                                                <td className = "vr-17" data-heading='S.NO'>
                                                    {index + 1}
                                                </td>
                                                <td className = "vr-17" data-heading='DESCRIPTION'>
                                                    {record.description}
                                                </td>
                                                <td className = "vr-17" data-heading='ATTENDED BY'>
                                                    {record.attendedBy}
                                                </td>
                                                <td className = "vr-17" data-heading='DATE'>
                                                    {toDate(record.date).toLocaleDateString(
                                                    'en-UK'
                                                    )}
                                                </td>
                                                <td className = "vr-17" data-heading='REPORT'>
                                                    {record.report}
                                                </td>
                                                <td className = "vr-17" data-heading=''>
                                                    <div style = {{display : "flex"}}>
                                                    <Link className = "vr-20"
                                                        to={"/editrecord"}
                                                        state = {{id : record._id, aadhar : location.state.aadhar}}
                                                    >
                                                        <UilEdit size='18' color='#fff' />
                                                    </Link>
                                                    <button className = "vr-21"
                                                        onClick={() =>
                                                        deleteHandler(record._id)
                                                        }
                                                    >
                                                        <UilTrashAlt size='18' color='#fff' />
                                                    </button>
                                                    </div>
                                                </td>
                                                </tr>
                                             );
                                         }
                                     })}
                                </tbody>
                                </table>
                            </div>
                            </div>
                        {/* )} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Viewrecord;