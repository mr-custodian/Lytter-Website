import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/Navbar";
import Home from "./pages/Home";
import Recycler from "./pages/Recycler";
import Segregator from "./pages/Segregator";
import Resources from "./pages/Resources";
import GetInTouch from "./pages/GetInTouch";


function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recycler" element={<Recycler />} />
        <Route path="/Segregator" element={<Segregator />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/GetInTouch" element={<GetInTouch />} />
      </Routes>
    </Router>
  );
}

export default App;