import React from "react";
import { LocalLibrarySharp } from "@mui/icons-material";

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-items">

                <div className="navbar-items-tile">
                    <LocalLibrarySharp />
                    <p>Welcome to Journaling 101!</p>
                </div>

                </div>
        </div>
    );
}

export default NavBar;
