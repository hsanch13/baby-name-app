import React, {useState} from 'react'
import { Form } from "semantic-ui-react"

function NewNameForm() {
  return (
    <div>
      <h3>Add a baby name</h3>
      <Form>
      <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            // value={}
            // onChange={}
            />
          <Form.Input
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            // value={} 
            // onChange={}
            />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            // value={}
            // onChange={} 
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            // value={} 
            // onChange={}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default NewNameForm