import React from "react";
import NavBar from "./NavBar";
import "./Home.css";
import Banner from "../Images/bsc-banner-min.jpg";
import Insign from "../Images/site-logo-insign.png";
import Herseys from "../Images/home-hersheys-min.jpg";
import Drinks from "../Images/home-drinks-min.jpg";
import Nachos from "../Images/Nachos-min.jpg";
import Feature from "../Images/home-featured-min-1.jpg";
import Release from "../Images/release.jpg";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";

function Home() {
    
    const cardData = [
        {
            image: Nachos,
            title: "BEST SELLER",
            description: "NACHOS ANGUS BURGER",
        },
        {
            image: Feature,
            title: "FEATURED DRINKS",
            description: "ORIGINAL BROWN SUGAR LATTE",
        },
        { image: Release, title: "LATEST RELEASE" },
    ];
    return (
        <div className="home">
            <NavBar />

            <div className="home-items">
                <img src={Insign} alt="Insign" />
                <img src={Banner} alt="Banner" />
            </div>

            <div className="home-items-words">
                <h6>THE NEW ADDICTION</h6>
                <p>
                    BLACK SCOOP CAFE, EXTRAORDINARY DRINKS, EXTRAORDINARY CAFE
                </p>{" "}
                <br />
                <div className="home-item-images">
                    <img src={Herseys} alt="Insign" />
                    <img src={Drinks} alt="Banner" />
                    <p>
                        We take pride in being the country’s first black soft
                        serve ice cream, tea and coffee lounge. The concept is
                        to bring together these crowd favorites while
                        maintaining the unique identity and premium quality of
                        each product. This displays our characteristics to be at
                        the forefront of food and beverage evolution. our
                        products are exclusively formulated to leave a distinct
                        mark of quality in the minds of our customers. Our main
                        goal in establishing the company is to bring the joy of
                        contemporary coffee culture and reinvented ice cream
                        products to the hearts of Filipinos. From the start, we
                        have committed ourselves to being the best in our field.
                    </p>
                </div>
                <br />
                <Link to="/menu">
                    <Button
                        style={{
                            color: "white",
                            border: "1px solid",
                            borderRadius: "5px",
                        }}
                    >
                        {" "}
                        LEARN MORE{" "}
                    </Button>
                </Link>
                <div className="home-card">
                    <div className="home-card-items">
                        {cardData.map((card, index) => (
                            <Card key={index} sx={{ maxWidth: 345 }} className="card">
                                <CardActionArea>
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            {card.title}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={card.image}
                                        alt={card.title}
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {card.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
