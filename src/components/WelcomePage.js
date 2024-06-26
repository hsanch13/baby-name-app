import React, {useState, useEffect} from 'react'
import NameCollection from "./NameCollection"
import NewNameForm from "./NewNameForm"
import Search from "./Search"
import { Container } from "semantic-ui-react";

function WelcomePage() {

    const [babyNames, setBabyNames] = useState([])

    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/babyNames")
        .then(r => r.json())
        .then(nameData => setBabyNames(nameData))
    }, [])

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
            body: JSON.stringify(dataToSend)
        }

        fetch ("http://localhost:3000/babyNames", newBabyNameObj)
        .then(r => r.json())
        .then(nameData => setBabyNames(nameData))
      }

  return (
        <Container>
                <h1>Here are some ideas for baby names!</h1>
                    <br />
                    <Search search={search} handleChange={handleChange}/>
                    <br />
                    <NewNameForm addNewName={addNewName} />
                    <br />
                    <NameCollection babyNames={filteredNames} />
        </Container>
  )
}

export default WelcomePage
