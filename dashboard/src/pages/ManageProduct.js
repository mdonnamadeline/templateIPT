import { React, useState, useEffect } from "react";
import axios from "axios";
import {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,
    Modal,
    Box,
    Table,
    TableContainer,
    TextField,
} from "@mui/material";
import NavBar from "./NavBar";
import "./ManageProduct.css";
import { Delete, Edit } from "@mui/icons-material";

function ManageProduct() {
    const [dataList, setDataList] = useState([]);
    const [refreshDataList, setRefreshDataList] = useState(false);
    const [modalState, setModalState] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const initialData = {
        date: "",
        title: "",
        content: "",
    };

    const [currentData, setCurrentData] = useState(initialData);

    const openModal = (data, isEdit = false) => {
        setCurrentData(data);
        setIsEditMode(isEdit);
        setModalState(true);
    };

    const closeModal = () => {
        setModalState(false);
    };

    const handleChange = (e) => {
        setCurrentData({
            ...currentData,
            [e.target.name || e.target.id]: e.target.value,
        });
    };

    useEffect(() => {
        axios
            .get(`http://localhost:1337/ViewEntries`)
            .then((response) => {
                setDataList(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [refreshDataList]);

    const handleAddEntry = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:1337/AddEntry",
                currentData
            );

            const result = await response.data;

            if (result.success) {
                setRefreshDataList(!refreshDataList);
                setModalState(false);
            }
            alert(result.message);
        } catch (error) {
            console.error("Error adding data:", error);
            alert("An error occured. Please try again.");
        }
    };

    const handleEditEntry = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:1337/EditEntry",
                currentData
            );

            const result = response.data;

            if (result.success) {
                alert(result.message);
                setRefreshDataList(!refreshDataList);
                setModalState(false);
            } else {
                alert("Failed to update data. Please try again!.");
            }
        } catch (error) {
            console.error("Error updating data:", error);
            alert("An error occured. Please try again.");
        }
    };

    return (
        <div className="container">
            <NavBar />
            <div className="content">
                <Button
                    className="manage-button"
                    variant="contained"
                    onClick={() => openModal(initialData, false)}
                >
                    ADD ENTRY
                </Button>

                <TableContainer className="table-container">
                    <Table>
                        <TableHead>
                            <TableRow >
                                <TableCell align="center">Date</TableCell>
                                <TableCell align="center">Title</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataList.map((item) => (
                                <TableRow key={item.date}>
                                    <TableCell align="center">{item.date}</TableCell>
                                    <TableCell align="center">{item.title}</TableCell>

                                    <TableCell align="center" > 
                                       
                                            <Edit className="icon-edit" onClick={() =>
                                                openModal(item, true)
                                            }/>
                                            <Delete className="icon-delete" />
                                            
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Modal open={modalState} onClose={closeModal}>
                    <Box className="modal">
                        {/* it will only render the typography if not null */}
                        {currentData && (
                            <form
                                onSubmit={
                                    isEditMode
                                        ? handleEditEntry
                                        : handleAddEntry
                                }
                            >
                                <p>{isEditMode ? "EDIT" : "ADD NEW ENTRY"}</p>

                                <TextField
                                    id="date"
                                    required
                                    label="Date"
                                    variant="outlined"
                                    type="date"
                                    value={currentData.date}
                                    onChange={handleChange}
                                    InputLabelProps={{shrink: true,}}
                                />

                                <TextField
                                    id="title"
                                    required
                                    label="Title"
                                    variant="outlined"
                                    value={currentData.title}
                                    onChange={handleChange}
                                />

                                <TextField 
                                    id="content"
                                    required
                                    label="Content"
                                    variant="outlined"
                                    value={currentData.content}
                                    onChange={handleChange}
                                    multiline
                                    rows="5"
                                />

                                <Button className="buttonmodal" variant="contained" type="submit">
                                    {isEditMode ? "EDIT" : "ADD"}
                                </Button>
                            </form>
                        )}
                    </Box>
                </Modal>
            </div>
        </div>
    );
}

export default ManageProduct;
