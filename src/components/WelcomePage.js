import React from 'react'
import NameCollection from "./NameCollection"
import Search from "./Search"
import { Button, Container } from "semantic-ui-react";

function WelcomePage({ babyNames, setBabyNames, search, setSearch }) {

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

  return (
        <Container>
            <h1>Congrats on the babe! Here are ideas for names</h1>
                <br />
                <Button onClick={handleSortByAlpha} >Sort Names In Alphabetical Order</Button>
                <Button onClick={handleSortByPopularity} >Sort Names By Popularity</Button>
                <Button onClick={handleSortByGender} >Sort Names By Gender</Button>
                <br />
                <br />
                <NameCollection babyNames={babyNames} search={""} />
        </Container>
  )
}

export default WelcomePage
