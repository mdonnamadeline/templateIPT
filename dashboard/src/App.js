import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Homepage from "./pages/Homepage";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";
import OurStory from "./pages/OurStory";
import ContactUs from "./pages/ContactUs";
import Social from "./pages/Social";
import ManageProduct from "./pages/ManageProduct";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Homepage />} /> */}
                <Route path="/manageproduct" element={<ManageProduct />} />
                <Route path="/" element={<Home />} />
                <Route path="/Aboutus" element={<AboutUs />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/ourstory" element={<OurStory />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/social" element={<Social />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
