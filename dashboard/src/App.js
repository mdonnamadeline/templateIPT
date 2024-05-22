import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";
import OurStory from "./pages/OurStory";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ManageUser from "./pages/ManageUser";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                {/* <Route path="/manageproduct" element={<ManageProduct />} /> */}
                <Route path="/admin" element={<Admin />} />
                <Route path="/manageuser" element={<ManageUser />} />
                <Route path="/" element={<Home />} />
                <Route path="/Aboutus" element={<AboutUs />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/ourstory" element={<OurStory />} />
                <Route path="/contactus" element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
