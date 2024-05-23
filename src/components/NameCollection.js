import React, {useState} from 'react'
import NameCard from './NameCard'
import { Card } from "semantic-ui-react";

function NameCollection( {babyNames} ) {

  const babyNameCards = babyNames.map(babyName => {
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
      <h1>Here are some ideas for baby names!</h1>
      <Card.Group itemsPerRow={1}>
      { babyNameCards }
      </Card.Group>
    </div>
  )
}

export default NameCollection