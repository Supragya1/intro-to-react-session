import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import './App.css';
import RecipeTitle from './RecipeTitle';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
      <article>
        <h1>Recipe Manager</h1>
        <RecipeTitle />
      </article>
      <div>{new Date().toISOString()}</div>
    </Router>
  );
}

export default App;
// <article>
//         <h1>Recipe Manager</h1>
//         <RecipeTitle />
//</article>
//       <div>{new Date().toISOString()}</div>