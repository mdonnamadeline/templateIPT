import React from "react";
import logo from "../Images/Logo.png";
import "./NavBar.css";
import { Link } from "react-router-dom";  

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-items">
                <div
                    className="navbar-items-tile"
                    style={{ display: "flex", gap: "10px" }}
                >
                    <img src={logo} alt="Logo" />
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
                    <Link to="/aboutus">ABOUT US</Link>
                    <Link to="/menu">MENU</Link>
                    <Link to="/ourstory">OUR STORY</Link>
                    <Link to="/contactus">CONTACT US</Link>
                    {/* <Link to="/admin">ADMIN</Link>
                    <Link to="/viewuser">MANAGE USER</Link>
                    <Link to="/">Logout</Link> */}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
