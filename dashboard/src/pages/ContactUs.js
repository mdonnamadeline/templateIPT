import React from "react";
import NavBar from "./NavBar";
import "./ContactUs.css";
import Horizontal from "../Images/horizontal-logo-min.png";
import Email from "../Images/email.png";
import Message from "../Images/message.png";
import Location from "../Images/location.png";
import Facebook from "../Images/fb.png";
import Twitter from "../Images/x.png";
import Pinterest from "../Images/p.png";
import Instagram from "../Images/ig.png";
import Barista from "../Images/barista.jpg";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ContactUs() {
    return (
        <div className="contactus">
            <NavBar />
            <div className="contactus-container">
                <div className="contactus-items">
                    <Paper
                        style={{
                            padding: "50px",
                            marginTop: "20px",
                            background: "#24292d",
                        }}
                    >
                        <Typography
                            variant="h5"
                            style={{ color: "white", marginBottom: "20px", fontSize: 40,  fontFamily: "Unica One" }}
                        >
                            GET IN TOUCH!
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            style={{ color: "#ae895d", marginBottom: "20px", fontFamily: "Unica One"}}
                        >
                            HAVE QUESTIONS? WE ARE HAPPY TO ANSWER!
                        </Typography>

                        <TextField
                            variant="outlined"
                            label="First Name"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            variant="outlined"
                            label="Last Name"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            variant="outlined"
                            label="Phone Number"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            variant="outlined"
                            label="Email"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            variant="outlined"
                            label="Send Message"
                            multiline
                            rows={5}
                            fullWidth
                            margin="normal"
                        />
                        <Button
                            variant="outlined"
                            color="primary"
                            style={{
                                color: "white",
                                borderColor: "white",
                                marginTop: "20px",
                            }}
                        >
                            SEND MESSAGE
                        </Button>
                    </Paper>
                </div>
                <div className="barista">
                    <img
                        src={Barista}
                        alt="Barista"
                        className="barista-image"
                    />
                </div>
            </div>
            <br />
            <br />

            <div className="contact">
                <img src={Horizontal} alt="Horizontal" className="horizontal" />

                <div className="contact-items">
                    <div className="contact-item">
                        <img src={Email} alt="Email" />
                        <p>EMAIL US</p>
                        <p>ADMIN@BLACKSCOOPCAFE.COM</p>
                    </div>
                    <div className="contact-item">
                        <img src={Message} alt="Message" />
                        <p>CALL US</p>
                        <p>+63917 522 2256</p>
                    </div>
                    <div className="contact-item">
                        <img src={Location} alt="Location" />
                        <p>MAIN BRANCH</p>
                        <p>101 MAGINHAWA ST. QUESZON CITY</p>
                    </div>
                </div>
            </div>
            <div className="social">
                <Button
                    component={Link}
                    to="https://www.facebook.com/blackscoopcafe/"
                    className="circle-button"
                >
                    <img src={Facebook} alt="Facebook" className="icon" />
                    <i className="fab fa-facebook-f"></i>
                </Button>
                <Button
                    component={Link}
                    to="https://x.com/blackscoopcafe"
                    className="circle-button"
                >
                    <img src={Twitter} alt="Twitter" className="icon" />
                    <i className="fab fa-twitter"></i>
                </Button>
                <Button
                    component={Link}
                    to="https://www.pinterest.ph/blackscoopcafe/"
                    className="circle-button"
                >
                    <img src={Pinterest} alt="Pinterest" className="icon" />
                    <i className="fab fa-pinterest-p"></i>
                </Button>
                <Button
                    component={Link}
                    to="https://www.instagram.com/blackscoopcafeph/"
                    className="circle-button"
                >
                    <img src={Instagram} alt="Instagram" className="icon" />
                    <i className="fab fa-instagram"></i>
                </Button>
            </div>
        </div>
    );
}

export default ContactUs;
