import React from 'react'
import { Card } from "semantic-ui-react";

function NameCard( {name, gender, popularity, image} ) {
  return (
    <Card>
    <div>
      <div className="image">
        <img src={image} alt="baby foot" />
      </div>
      <div className="content">
        <div className="header">{name}</div>
      </div>
      <div className="gender">
        <span>Gender: {gender}</span>
      </div>
      <div className="description">
        <span className="popularity">Popularity: {popularity}</span>
        </div>
    </div>
  </Card>
  )
}

export default NameCard