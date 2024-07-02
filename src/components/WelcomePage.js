import React, {useState, useEffect} from 'react'
import NameCollection from "./NameCollection"
import NewNameForm from "./NewNameForm"
import Search from "./Search"
import { Button, Container } from "semantic-ui-react";

function WelcomePage() {

    const [babyNames, setBabyNames] = useState([])

    const [search, setSearch] = useState("")

    const [isSortedByGender, setIsSortedByGender] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3000/babyNames")
        .then(r => r.json())
        .then(nameData => setBabyNames(nameData))
    }, [])

    const handleSortByGender = () => {
        const sortedGender = [...babyNames].sort((a, b) => a.gender.localeCompare(b.gender))
        setBabyNames(sortedGender)
        setIsSortedByGender(true)
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredNames = babyNames.filter(babyName =>
        babyName.name.toLowerCase().includes(search.toLowerCase())
      );

    const addNewName = (nameData) => {
        setBabyNames([...babyNames, nameData])

    const newBabyNameObj = {
        method: "POST",
        headers: {
                "Content-Type": "application/json"
        },
        body: JSON.stringify(nameData)
    }

    fetch ("http://localhost:3000/babyNames", newBabyNameObj)
    .then(r => r.json())
    .then((newName) => setBabyNames((prevBabyNames) => [...prevBabyNames, newName]))
    }

  return (
        <Container>
            <h1>Here are some ideas for baby names!</h1>
                <br />
                <Search search={search} handleChange={handleChange}/>
                <br />
                <NewNameForm addNewName={addNewName} />
                <br />
                <Button onClick={handleSortByGender} >Sort By Gender</Button>
                <br />
                <NameCollection babyNames={filteredNames} />
        </Container>
  )
}

export default WelcomePage
