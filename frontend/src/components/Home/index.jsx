import React from "react";
import "./styles.css";

function Home() {
    return (
        <section id = "home" className="home-1">
            <div className="home-1-1">
                <div className="home-2">
                    <p className = "hometitle"><b>My HealthDesk</b></p>
                    <div style={{width: "50%"}}>
                        <p className="home-3">One stop solution for your health records</p>
                    </div>
                    <div style={{width: "75%", marginBottom: "20px"}}>
                        <p className= "homeinfo"><b>Our aim is to develop a solution for nationwide health information network that brings patient and hospitals to a single platform.</b></p>
                    </div>
                    <div style={{width: "75%"}}>
                        <a className="home-4" href="/hospitallogin">Hospital</a>
                        <a className="home-5" href="/userlogin">User</a>
                    </div>
                </div>
                <img className = "homeimg" src="http://www.sciencefriday.com/wp-content/uploads/2016/12/shutterstock_526242388.jpg" alt = "HomeImage" />
            </div>
        </section>
    );
}

export default Home;