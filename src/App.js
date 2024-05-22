import React from "react";
import { createRoot } from "react-dom/client";
import {
BrowserRouter as Router, Routes,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./pages/homePage";
import { Home } from "@mui/icons-material";




const App = () =>{
    return (
      <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
    )
}

export default App;