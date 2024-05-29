import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ViewUser from "./pages/ViewUser";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/viewuser" element={<ViewUser />} />
                <Route path="/Menu" element={<Menu />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
