import React from 'react'
import NameCard from './NameCard'
import { Card } from "semantic-ui-react";

function NameCollection({ search, babyNames, sortByGender }) {
  const filteredNames = babyNames.filter(babyName =>
    babyName.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedGender = filteredNames.toSorted((a, b) => {
    if (a.gender.toLowerCase() < b.gender.toLowerCase()) {
      return -1
    }
    if (a.gender.toLowerCase() > b.gender.toLowerCase()) {
      return 1
    }
    return 0
  })
  const names = sortByGender ? sortedGender : filteredNames

  const babyNameCards = names.map(babyName => {
    return (
      <NameCard 
        key={babyName.id}
        name={babyName.name}
        gender={babyName.gender}
        popularity={babyName.popularity}
        image={babyName.image}
      />
    )
  })
  return (

    <div>
      <Card.Group itemsPerRow={5}>
        {babyNameCards}
      </Card.Group>
    </div>
  )
}

export default NameCollection