import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import "./Main.css";

function Main() {
    const [openModal, setOpenModal] = useState(false);
    const [filmDetails, setFilmDetails] = useState({
        poster: null,
        title: "",
        director: "",
        releaseYear: "",
        logline: "",
    });
    const [films, setFilms] = useState([]); 
    const posterInputRef = useRef(null);

    useEffect(() => {
        handleGetFilms();
    }, []);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setFilmDetails({
            poster: null,
            title: "",
            director: "",
            releaseYear: "",
            logline: "",
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilmDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handlePosterChange = (e) => {
        setFilmDetails((prevDetails) => ({
            ...prevDetails,
            poster: e.target.files[0],
        }));
    };

  

    const handleAddFilm = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("poster", filmDetails.poster);
        formData.append("title", filmDetails.title);
        formData.append("director", filmDetails.director);
        formData.append("releaseYear", filmDetails.releaseYear);
        formData.append("logline", filmDetails.logline);
    
        try {
            
            const response = await axios.post("/upload-poster", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            
            console.log("Poster added successfully:", response.data);
            handleCloseModal();
            handleGetFilms();
        } catch (error) {
            console.error("Error adding poster:", error.response?.data || error.message);
        }
    };

    const handleDeleteFilm = async (id) => {
        try {
            const response = await axios.delete(`/delete-poster/${id}`);
            console.log("Poster deleted successfully:", response.data);
            handleGetFilms();
        } catch (error) {
            console.error("Error deleting poster:", error.response?.data || error.message);
        }
    };

    const handleUpdateFilm = async (id) => {
        const formData = new FormData();
        formData.append("poster", filmDetails.poster);
        formData.append("title", filmDetails.title);
        formData.append("director", filmDetails.director);
        formData.append("releaseYear", filmDetails.releaseYear);
        formData.append("logline", filmDetails.logline);

        try {
            const response = await axios.put(`/update-poster/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("Poster updated successfully:", response.data);
            handleGetFilms();
        } catch (error) {
            console.error("Error updating poster:", error.response?.data || error.message);
        }
    };

    const handleGetFilms = async () => {
        try {
            const response = await axios.get("/get-poster");
            setFilms(response.data.data);
        } catch (error) {
            console.error("Error getting films:", error.response?.data || error.message);
        }
    };

    return (
        <div>
            <div className="main">
                <h3>Film Manager</h3>
                <Button variant="contained" onClick={handleOpenModal}>
                    Add Film
                </Button>
                <Dialog open={openModal} onClose={handleCloseModal}>
                    <DialogTitle>Add Film</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please provide the following details:
                        </DialogContentText>
                        <form onSubmit={handleAddFilm}>
                            <input
                                ref={posterInputRef}
                                accept="image/jpeg,image/png"
                                type="file"
                                onChange={handlePosterChange}
                            />
                            <TextField
                                margin="dense"
                                label="Film Title"
                                type="text"
                                fullWidth
                                name="title"
                                value={filmDetails.title}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                label="Director's Name"
                                type="text"
                                fullWidth
                                name="director"
                                value={filmDetails.director}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="dense"
                                label="Year of Release"
                                type="text"
                                fullWidth
                                name="releaseYear"
                                value={filmDetails.releaseYear}
                                onChange={handleInputChange}
                                />
                                <TextField
                                    margin="dense"
                                    label="Logline"
                                    type="text"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    name="logline"
                                    value={filmDetails.logline}
                                    onChange={handleInputChange}
                                />
                                <DialogActions>
                                    <Button onClick={handleCloseModal} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={handleAddFilm}type="submit" color="primary">
                                        Add
                                    </Button>
                                </DialogActions>
                            </form>
                        </DialogContent>
                    </Dialog>
                    {/* Display films */}
                    {films.map((film) => (
                        <div key={film._id}>
                            <h4>{film.title}</h4>
                            <p>{film.director}</p>
                            <p>{film.releaseYear}</p>
                            <p>{film.logline}</p>
                            <img
                                src={`data:image/jpeg;base64,${film.image}`}
                                alt={film.title}
                            />
                            <Button onClick={() => handleDeleteFilm(film._id)}>
                                Delete
                            </Button>
                            <Button onClick={() => handleUpdateFilm(film._id)}>
                                Update
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    
    export default Main;
    
