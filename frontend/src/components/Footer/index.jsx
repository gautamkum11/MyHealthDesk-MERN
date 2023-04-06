import React from "react";
import "./styles.css";

function Footer() {
    return (
        <div class="footer">
            <div>
                <div style={{width: "220px;", display: "flex", justifyContent : "center"}}>
                    <p className = "title">My HealthDesk</p>
                </div>
                <p className = "copyright">©2023 Gautam Kumawat</p>
            </div>
        </div>
    );
}

export default Footer;