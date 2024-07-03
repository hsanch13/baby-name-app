import React, {useState, useEffect} from 'react'
import NameCollection from "./NameCollection"
import NewNameForm from "./NewNameForm"
import Search from "./Search"
import { Button, Container } from "semantic-ui-react";

function WelcomePage() {

    const [babyNames, setBabyNames] = useState([])

    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/babyNames")
        .then(r => r.json())
        .then(nameData => setBabyNames(nameData))
    }, [])

    const handleSortByGender = () => {
        const sortedGender = [...babyNames].toSorted((a, b) => {
          if (a.gender < b.gender) {
            return -1
          }
          if (a.gender > b.gender) {
            return 1
          }
          return 0
        });
        setBabyNames(sortedGender);
      };

    const handleSortByPopularity = () => {
        const sortedPopNames = [...babyNames].toSorted((a, b) => {
            const popularity = {"high": 0, "medium": 1, "low": 2}
            if (popularity[a.popularity] < popularity[b.popularity]) {
                return -1
             }
            if (popularity[a.popularity] > popularity[b.popularity]) {
                return 1
            }
                return 0
        })
        setBabyNames(sortedPopNames)
  };

    const handleSortByAlpha = () => {
        const sortedAlphaNames = [...babyNames].toSorted((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        })
        setBabyNames(sortedAlphaNames)
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredNames = babyNames.filter(babyName =>
        babyName.name.toLowerCase().includes(search.toLowerCase())
      );

    const addNewName = (nameData) => {
        const newId = Math.max(...babyData.map(baby => baby.id)) + 1
        nameData["id"] = newId
        
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
        // setBabyData([...babyData, newName])
    })
    }

  return (
        <Container>
            <h1>Congrats on the babe! Here are ideas for names</h1>
                <br />
                <Search search={search} handleChange={handleChange}/>
                <br />
                <NewNameForm addNewName={addNewName} />
                <br />
                <Button onClick={handleSortByAlpha} >Sort Names In Alphabetical Order</Button>
                <Button onClick={handleSortByPopularity} >Sort Names By Popularity</Button>
                <Button onClick={handleSortByGender} >Sort Names By Gender</Button>
                <br />
                <br />
                <NameCollection babyNames={filteredNames} />
        </Container>
  )
}

export default WelcomePage
