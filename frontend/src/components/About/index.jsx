import React from "react";
import "./styles.css";

function About() {
    return (
        <section id = "about" className="about-1">
            <div>
                <div className = "about-1-1">
                    <p className="about-2">Who are we?</p>
                    <p className="about-3">We provide digital record of health information such as medical history, diagnoses, medications, immunization dates, and allergies. Making the health information available, reducing duplication of tests, reducing delays in treatment, and patients well informed to take better decisions.</p>
                </div>
                <div className="about-4">
                    <div className="about-4-1">
                        <div className = "lowertitle">
                            <u className = "underline">Our Vision</u>
                        </div>
                        <div style={{width: "75%"}}>
                            <p className = "info">Our vision is to enhance Nation's Health IT Infrastructure and strengthen the relationship between patients and clinicians.</p>
                        </div>
                    </div>
                    <div className="about-4-1">
                        <div className = "lowertitle">
                            <u className = "underline">Key Features</u>
                        </div>
                        <div style={{width: "75%"}}>
                            <ul style={{marginLeft: "20px"}}>
                                <li>
                                    <p className = "info">Easy sign up / sign in</p>
                                </li>
                                <li>
                                    <p className = "info">Digitally secure Health Record</p>
                                </li>
                                <li>
                                    <p className = "info">Efficiently manage your Patient's health data</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;