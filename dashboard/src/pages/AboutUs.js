import React from "react";
import NavBar from "./NavBar";
import "./About.css";
import Founded from "../Images/Black-Scoop-Cafe-founded-min.jpg";
import Sets from "../Images/what-sets-black-scoop-cafe-apart-min.jpg";
import Grid from "@mui/material/Grid";
import Horizontal from "../Images/horizontal-logo-min.png";
import Email from "../Images/email.png";
import Message from "../Images/message.png";
import Location from "../Images/location.png";
import Facebook from "../Images/fb.png";
import Twitter from "../Images/x.png";
import Pinterest from "../Images/p.png";
import Instagram from "../Images/ig.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function AboutUs() {
    return (
        <div className="bgcolor">
            <div className="aboutus">
                <NavBar />
                <div className="aboutus-items">
                    <img src={Founded} alt="Founded" />
                    <h6>ABOUT US</h6>
                    <p>
                        BLACK SCOOP CAFE WAS FOUNDED ON THE LOVE FOR COFFEE, TEA
                        AND ICE CREAM AND IT IS FUELED BY THE PASSION FOR
                        QUALITY FOOD AND DRINKS.
                    </p>
                </div>

                <div className="aboutus-items-container">
                    <Grid container spacing={0}>
                        <Grid
                            item
                            xs={6}
                            className="grid-item"
                            style={{ width: "100%", height: "40%" }}
                        >
                            <img
                                src={Sets}
                                alt="Sets"
                                style={{ width: "100%", height: "40%" }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            className="grid-item"
                            style={{ width: "100%", height: "40%" }}
                        >
                            <h1>WHAT SETS US APART</h1>
                            <p style={{ color: "#ea8950" }}>
                                EXCLUSIVE FORMULATION OF DRINKS
                            </p>
                            <p>
                                All our drinks are exclusively formulated to
                                leave a distict mark of quality in the minds of
                                our customers.
                            </p>
                            <p style={{ color: "#ea8950" }}>STRONG BRANDING</p>
                            <p>
                                One of the most important steps in business is
                                branding, and we have taken this philosophy to
                                heart. Our logo represents the owners’ vision
                                for the brand – to be the emblem or symbol of
                                local quality coffee and revolutionary soft
                                serves.
                            </p>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            className="grid-item"
                            style={{ width: "100%", height: "40%" }}
                        >
                            <h1>PHILOSOPHY</h1>
                            <p style={{ color: "#ea8950" }}>
                                EFFECTIVE SUPPLY CHAIN MANAGEMENT
                            </p>
                            <p>
                                Our flawless supply chain system assures
                                consistent product supply and quality. We
                                maintain strong bonds with coffee plantations
                                and tea farmers alike to make sure that we get
                                first pick of the best crops they have in each
                                batch. As company standard, our facilities uses
                                reliable and efficient machines and time table
                                during the roasting and fermentation process.
                                The beans and leaves are then checked, weighed
                                and packed fresh before delivering to our store.
                            </p>

                            <p>
                                We take pride in being the country’s first black
                                soft serve ice cream, tea and coffee lounge. The
                                concept is to bring together these crowd
                                favorites while maintaining the unique identity
                                and premium quality of each product. this
                                displays our characteristics to be at the
                                forefront of food and beverage evolution.
                            </p>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            className="grid-item"
                            style={{ width: "100%", height: "40%" }}
                        >
                            <img
                                src={Sets}
                                alt="Sets"
                                style={{ width: "100%", height: "40%" }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            className="grid-item"
                            style={{ width: "100%", height: "40%" }}
                        >
                            <img
                                src={Sets}
                                alt="Sets"
                                style={{ width: "100%", height: "40%" }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            className="grid-item"
                            style={{ width: "100%", height: "50%" }}
                        >
                            <h1>OUR TEAM</h1>
                            <p style={{ color: "#ea8950" }}>
                                EXTENSIVE TRAINING FACILITIES AND CURRICULUM
                            </p>
                            <p>
                                Our trainors are the best in the hospitality
                                industry. With numerous years of experience in
                                each of their fields, they teach with passion
                                and pass on valuable information on product
                                knowledge and customer service to the staffs.
                            </p>
                            <p style={{ color: "#ea8950" }}>
                                CUSTOMER SATISFACTION
                            </p>
                            <p>
                                We wanted to be more than just a café. We want
                                to be a second home to our customers. This is
                                the reason why we put paramount importance in
                                customer satisfaction. Our company standards
                                aims to delight new customers and continuously
                                impress regular ones.
                            </p>
                        </Grid>
                    </Grid>
                    <div className="contact">
                        <img
                            src={Horizontal}
                            alt="Horizontal"
                            className="horizontal"
                        />

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
                            <img
                                src={Facebook}
                                alt="Facebook"
                                className="icon"
                            />
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
                            <img
                                src={Pinterest}
                                alt="Pinterest"
                                className="icon"
                            />
                            <i className="fab fa-pinterest-p"></i>
                        </Button>
                        <Button
                            component={Link}
                            to="https://www.instagram.com/blackscoopcafeph/"
                            className="circle-button"
                        >
                            <img
                                src={Instagram}
                                alt="Instagram"
                                className="icon"
                            />
                            <i className="fab fa-instagram"></i>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
