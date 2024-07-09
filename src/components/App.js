import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WelcomePage from "./WelcomePage"
// import NewNameForm from "./NewNameForm";

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          {/* <Route path="/addNewName" element={<NewNameForm />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
