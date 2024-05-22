import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Insign from "../Images/site-logo-insign.png";
import Min from "../Images/collection-min.jpg";

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name || e.target.id]: e.target.value,
        });
    };

   const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(
            "http://localhost:1337/adminLogin",
            user
        );
        const result = response.data;
        if (result.success) {
            if (result.role === "admin") {
                localStorage.setItem("user", user.email);
                navigate("/admin"); 
            } else {
                alert("Only admins can log in.");
            }
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error("Error logging in:", error);
        alert("An error occured. Please try again.");
    }
};
    return (
        <div
            className="loginContainer"
            style={{ backgroundImage: `url(${Min})` }}
        >
            <img
                src={Insign}
                alt="Insign"
                style={{ width: "300px", height: "300px", marginRight: 50 }}
            />

            <form className="loginForm" onSubmit={handleLogin}>
                <h2>BLACKSCOOP CAFE</h2>
                <p>Welcome Admin!</p>
                <TextField
                    required
                    name="email"
                    label="Email"
                    variant="outlined"
                    value={user.email}
                    onChange={handleChange}
                    inputProps={{
                        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
                    }}
                />
                <TextField
                    id="password"
                    required
                    label="password"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    value={user.password}
                    onChange={handleChange}
                    clearable={false}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button variant="contained" type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}

export default Login;
