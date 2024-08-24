import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { Form } from "semantic-ui-react"

function NewNameForm({ setBabyNames, babyNames }) {
  const defaultState = {
    name: "",
    gender: "",
    popularity: "",
    image: ""
  }

  const navigate = useNavigate()

  const [formData, setFormData] = useState(defaultState)
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

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
    navigate("/")
  })
}

  return (
    <div>
      <h3>Add a baby name</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          addNewName(formData)
        }}
      >
      <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            />
          <Form.Input
            fluid label="Gender" 
            placeholder="Gender" 
            name="gender" 
            value={formData.gender} 
            onChange={handleChange}
            />
          <Form.Input
            fluid label="Popularity"
            placeholder="Popularity"
            name="popularity"
            value={formData.popularity}
            onChange={handleChange} 
          />
          <Form.Input
            fluid label="Image"
            placeholder="Image"
            name="image"
            value={formData.image} 
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default NewNameForm