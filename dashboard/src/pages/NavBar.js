import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";  

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-items">
                <div
                    className="navbar-items-tile"
                    style={{ display: "flex", gap: "10px" }}
               />
                    <p>BLACK SCOOP CAFE</p>
                </div>

                <div
                    className="navbar-items-section"
                    style={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "flex-end",
                        marginRight: "40px",
                    }}
                >
                    <Link to="/">HOME</Link>
                </div>
            </div>
    );
}

export default NavBar;
