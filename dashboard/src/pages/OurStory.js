import React from "react";
import NavBar from "./NavBar";
import "./OurStory.css";
import Blackscoop from "../Images/blackscoop.jpg";
import Image1 from "../Images/brazil.jpg";
import Image2 from "../Images/ovaltine.jpg";
import Image3 from "../Images/places.jpg";
import Image4 from "../Images/Snapseed.jpg";
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


function OurStory() {
    const timelineItems = [
        {
            date: "JANUARY 2020",
            image: Image2,
            description:
                "BLACK SCOOP CAFE’S OVALTINE COLLECTION Black Scoop is no stranger to experimentation, and they’re not the type to shy away from flavors of bygone eras—or what feel like bygone eras to ",
        },
        {
            date: "OCTOBER 2019",
            image: Image1,
            description:
                "BRAZIL YELLOW BOURBON  Here's our commitment to bringing you the best coffee experience! Introducing BRAZIL YELLOW BOURBON a perfectly balanced coffee with chocolate, caramel, graham and cinnamon notes. Really,",
        },
        {
            date: "OCTOBER 2018",
            image: Image3,
            description:
                "BLACK SCOOP CAFE IS GOING PLACES If you're a milk-tea fan, 2018 has been a pretty great year for you. Not only are your old-time favorites still going as strong as",
        },
        {
            date: "SEPTEMBER 2018",
            image: Image4,
            description:
                "OUR PILOT BRANCH: OPENING OF MAGINHAWA BRANCH There's a big chunk of the global population that can count the number of desserts they like with one hand, if at all. Many of us",
        },
    ];

    return (
        <div className="ourstory">
            <NavBar />

            <div className="ourstory-items">
                <img src={Blackscoop} alt="Blackscoop" />
                <h6>OUR JOURNEY</h6>
                <p>
                    BORN FROM OUR LOVE OF SUNDAE, COFFEE, TEA AND FINE FOOD.
                    IT'S BEEN QUITE A JOURNEY.
                </p>
            </div>

            <div className="ourstory-items-container">
                {timelineItems.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <h2>{item.date}</h2>
                        <img src={item.image} alt="Timeline" />
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>

            <div>
                <div className="contact">
                    <img src={Horizontal} alt="Horizontal" />

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
        </div>
    );
}

export default OurStory;
