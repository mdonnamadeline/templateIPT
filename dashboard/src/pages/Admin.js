import React, { useState, useEffect, useRef } from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import "./Admin.css";

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

  useEffect(() => {
    
    getDish();
  }, []);

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  function uploadDish() {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);

    fetch("http://localhost:1337/upload-menu", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getDish(); 
        setFile(null); 
        setName(""); 
        setPrice(""); 
        setDescription(""); 
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; 
        }
      })
      .catch((error) => console.error("Error:", error));
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
      const response = await fetch(`http://localhost:1337/delete-menu/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.status === "ok") {
        getDish(); // Changed from getImage()
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
    setEditId(null);
    setEditName("");
    setEditPrice("");
    setEditDescription(""); 
  };

  const openDeleteDialog = (id) => {
    setDeleteId(id);
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setDeleteId(null);
  };

  const updateDish = async () => {
    try {
      const response = await fetch(`http://localhost:1337/update-menu/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: editName, price: editPrice, description: editDescription }), 
      });
      const data = await response.json();
      if (data.status === "ok") {
        getDish(); // Changed from getImage()
        closeEditDialog();
      } else {
        console.error("Error updating image:", data.message);
      }
    } catch (error) {
      console.error("Error updating image:", error);
    }
  };

  return (
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
      <div className="image-container">
        {allImage.map((data, index) => {
          const imageUrl = `data:image/jpeg;base64,${data.image}`;
          return (
            <div key={index} className="image-item">
              <img src={imageUrl} alt={`Image ${index}`} />
              <div className="image-text">{data.Name}</div>
              <div className="image-text">₱&nbsp;{data.Price}</div>
              <Button variant="contained" onClick={() => openEditDialog(data._id, data.Name, data.Price, data.Description)}>
                Edit
              </Button>
              &nbsp;
              <Button variant="contained" color="secondary" onClick={() => openDeleteDialog(data._id)}>
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
          <Button onClick={() => deleteDish(deleteId)} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Admin;
