import React from "react";
import { createRoot } from "react-dom/client";
import {
BrowserRouter as Router, Routes,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import { Home } from "@mui/icons-material";




const App = () =>{
    return (
        // <>Welcome to IPO Dashboard!!</>
     <Router>
          <div className="App">
            <Link to="/home">Home</Link>
          </div>
          <Routes>
            <Route path="/home" element={HomePage}></Route>
          </Routes>
     </Router>
    )
}

export default App;