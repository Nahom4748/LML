import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ContactUs from "./Page/ContactUs/ContactUs";
import Footer from "./Page/Footer/Footer";
import Header from "./Page/Header/Header";
import Location from "./Page/Location/Location";
import Service from "./Page/Service/Service";
import WeRepairLog from "./Page/WeRepairLog/WeRepairLog";
import Home from "./Page/Home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/repair-log" element={<WeRepairLog />} />
        <Route path="/Locations" element={<Location />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
