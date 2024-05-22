import React from "react";
import NavBar from "./NavBar";
import "./OurStory.css";
import Blackscoop from "../Images/blackscoop.jpg";
import Image1 from "../Images/brazil.jpg";
import Image2 from "../Images/ovaltine.jpg";
import Image3 from "../Images/places.jpg";
import Image4 from "../Images/Snapseed.jpg";

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
                        <img src={item.image} alt="Timeline"  />
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
                

        </div>
    );
}

export default OurStory;
