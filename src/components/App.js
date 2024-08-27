import React , {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import WelcomePage from "./WelcomePage"
import NewNameForm from "./NewNameForm";
import Search from "./Search";

function App() {

  const [babyNames, setBabyNames] = useState([])

  const [search, setSearch] = useState("")

  const [sortByGender, setSortByGender] = useState(true)

  useEffect(() => {
      fetch("http://localhost:3000/babyNames")
      .then(r => r.json())
      .then(nameData => setBabyNames(nameData))
  }, [])

  
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
                sortByGender={sortByGender}
                setSortByGender={setSortByGender}
              />
            } 
          />
          <Route path="/addNewName" element={<NewNameForm babyNames={babyNames} setBabyNames={setBabyNames}/>} />
          <Route
            path="/search"
            element={
              <Search
                babyNames={babyNames}
                search={search}
                handleChange={setSearch}
                sortByGender={sortByGender}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;