import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./layouts/navbar.jsx";
import Home from "./pages/home.jsx";
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
