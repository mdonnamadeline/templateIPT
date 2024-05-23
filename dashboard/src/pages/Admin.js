import React, { useState, useEffect, useRef } from "react";
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import "./Admin.css";
import NavBar from "./NavBar";

function Admin() {
    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [allImage, setAllImage] = useState([]);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editPrice, setEditPrice] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [uploadError, setUploadError] = useState(""); // For upload errors
    const [uploadSuccess, setUploadSuccess] = useState(""); // For upload success

    useEffect(() => {
        getDish();
    }, []);

    function handleFileChange(e) {
        setFile(e.target.files[0]);
    }

    async function uploadDish() {
        setUploadError("");
        setUploadSuccess("");
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);

        try {
            const response = await fetch("http://localhost:1337/upload-menu", {
                method: "POST",
                body: formData,
            });
            const responseBody = await response.text(); // Read response as text first
            let data;

            try {
                data = JSON.parse(responseBody); // Try to parse JSON
            } catch (e) {
                throw new Error(`Unexpected response format: ${responseBody}`);
            }

            if (response.ok) {
                console.log(data);
                getDish();
                setFile(null);
                setName("");
                setPrice("");
                setDescription("");
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
                setUploadSuccess("Dish uploaded successfully!");
            } else {
                console.error("Error uploading dish:", data.message || data);
                setUploadError(data.message || "Error uploading dish");
            }
        } catch (error) {
            console.error("Error uploading dish:", error);
            setUploadError(error.message || "Error uploading dish");
        }
    }

    const getDish = async () => {
        try {
            const response = await fetch("http://localhost:1337/get-menu");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setAllImage(data.data);
        } catch (error) {
            console.error("Error fetching image data:", error);
        }
    };

    const deleteDish = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:1337/delete-menu/${id}`,
                {
                    method: "DELETE",
                }
            );
            const data = await response.json();
            if (data.status === "ok") {
                getDish();
                closeDeleteDialog();
            } else {
                console.error("Error deleting image:", data.message);
            }
        } catch (error) {
            console.error("Error deleting image:", error);
        }
    };

    const openEditDialog = (id, name, price, description) => {
        setEditId(id);
        setEditName(name);
        setEditPrice(price);
        setEditDescription(description);
        setEditDialogOpen(true);
    };

    const closeEditDialog = () => {
        setEditDialogOpen(false);
    };

    const openDeleteDialog = (id) => {
        setDeleteId(id);
        setDeleteDialogOpen(true);
    };

    const closeDeleteDialog = () => {
        setDeleteDialogOpen(false);
    };

    const updateDish = async () => {
        try {
            const response = await fetch(
                `http://localhost:1337/update-menu/${editId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: editName,
                        price: editPrice,
                        description: editDescription,
                    }),
                }
            );
            const data = await response.json();
            if (data.status === "ok") {
                getDish();
                closeEditDialog();
            } else {
                console.error("Error updating dish:", data.message);
            }
        } catch (error) {
            console.error("Error updating dish:", error);
        }
    };

    return (
        <div>
            <NavBar />
            <div className="main">
                <h3>Admin</h3>
                <div className="input-container">
                    <div>
                        <input
                            ref={fileInputRef}
                            accept="image/jpeg,image/png"
                            type="file"
                            onChange={handleFileChange}
                        />
                        {file && (
                            <img
                                width={150}
                                height={150}
                                src={URL.createObjectURL(file)}
                                alt="Uploaded"
                            />
                        )}
                    </div>
                    <div>
                        <TextField
                            className="text-field"
                            type="text"
                            placeholder="Name"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            className="text-field"
                            type="text"
                            placeholder="Price"
                            fullWidth
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <TextField
                            className="text-field"
                            type="text"
                            placeholder="Description"
                            fullWidth
                            multiline
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="button-group">
                    <Button variant="contained" onClick={uploadDish}>
                        Upload
                    </Button>
                </div>
                {uploadError && <p className="error-text">{uploadError}</p>}
                {uploadSuccess && (
                    <p className="success-text">{uploadSuccess}</p>
                )}
                <div className="image-container">
                    {allImage.map((data, index) => {
                        const imageUrl = `data:image/jpeg;base64,${data.image}`;
                        return (
                            <div key={index} className="image-item">
                                <img src={imageUrl} alt={`Image ${index}`} />
                                <div className="image-text">{data.name}</div>
                                <div className="image-text">
                                    ₱&nbsp;{data.price}
                                </div>
                                <Button
                                    variant="contained"
                                    onClick={() =>
                                        openEditDialog(
                                            data._id,
                                            data.name,
                                            data.price,
                                            data.description
                                        )
                                    }
                                >
                                    Edit
                                </Button>
                                &nbsp;
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => openDeleteDialog(data._id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        );
                    })}
                </div>
                <Dialog open={editDialogOpen} onClose={closeEditDialog}>
                    <DialogTitle>Edit Image</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Update the name, price, and description of the Dish.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Name"
                            type="text"
                            fullWidth
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                        />
                        <TextField
                            margin="dense"
                            label="Price"
                            type="text"
                            fullWidth
                            value={editPrice}
                            onChange={(e) => setEditPrice(e.target.value)}
                        />
                        <TextField
                            margin="dense"
                            label="Description"
                            type="text"
                            fullWidth
                            multiline
                            rows={4}
                            value={editDescription}
                            onChange={(e) => setEditDescription(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeEditDialog} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={updateDish} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={deleteDialogOpen} onClose={closeDeleteDialog}>
                    <DialogTitle>Delete Confirmation</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete this Dish?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeDeleteDialog} color="primary">
                            Cancel
                        </Button>
                        <Button
                            onClick={() => deleteDish(deleteId)}
                            color="secondary"
                        >
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default Admin;
