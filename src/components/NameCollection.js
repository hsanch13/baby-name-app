import React from 'react'
import NameCard from './NameCard'
import { Card } from "semantic-ui-react";

function NameCollection({ search, babyNames }) {

  const filteredNames = babyNames.filter(babyName =>
    babyName.name.toLowerCase().includes(search.toLowerCase())
  );

  const babyNameCards = filteredNames.map(babyName => {
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