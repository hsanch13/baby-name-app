import React from "react";
import WelcomePage from "./WelcomePage"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </div>
    </Router>
      
  //  <div className="App">
  //     <WelcomePage />
  //   </div>
  );
}

export default App;
