import React from 'react'
import { Form } from 'react-bootstrap'

export default function colourCode() {
  return (
    <>
    <Form.Label htmlFor="text-input">Code</Form.Label>
    <Form.Control
      type='text'
      id="inputPassword5"
      aria-describedby="text"
    />
    <Form.Text id="passwordHelpBlock" muted>
      Your password must be 8-20 characters long, contain letters and numbers,
      and must not contain spaces, special characters, or emoji.
    </Form.Text>
  </>
  )
}
