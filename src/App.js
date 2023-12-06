import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MusicNav from "./components/MusicNavbar";
import MusicFooter from "./components/MusicFooter"; 
import Home from "./pages/MusicHome"; 
import MusicStore from "./pages/MusicStore"; 
import AboutUs from "./pages/MusicAboutUs"; 
import Register from "./pages/MusicRegister"; 
import ShoppingCart from "./pages/MusicShoppingCart"; 

function App() {
  return (
    <Router>
      <MusicNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<MusicStore />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>

      <MusicFooter />
    </Router>
  );
}

export default App;
