import React , {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WelcomePage from "./WelcomePage"
import NewNameForm from "./NewNameForm";
import Search from "./Search";

function App() {
  const [babyNames, setBabyNames] = useState([])

    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/babyNames")
        .then(r => r.json())
        .then(nameData => setBabyNames(nameData))
    }, [])

    const addNewName = (nameData) => {
      const newBabyNameObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(nameData)
      }
  
      fetch ("http://localhost:3000/babyNames", newBabyNameObj)
      .then(r => r.json())
      .then((newName) => {
          setBabyNames([...babyNames, newName])
      })
      }

  return (
    <Router>
      <div className="App">
      <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/addNewName" className="nav-link">Add New Name</Link>
          <Link to="/search" className="nav-link">Search</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <WelcomePage
                babyNames={babyNames}
                setBabyNames={setBabyNames} 
                search={search}
                setSearch={setSearch}
              />
            } 
          />
          <Route path="/addNewName" element={<NewNameForm addNewName={addNewName}/>} />
          <Route path="/search" element={<Search search={search} handleChange={setSearch} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
