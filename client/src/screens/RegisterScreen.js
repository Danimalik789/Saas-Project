import React, { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import { Link, useNavigate, useLocation } from "react-router-dom"
import FormContainer from "../components/FormContainer"

const RegisterScreen = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState(null)

  const navigate = useNavigate()
  const location = useLocation()

  const redirect = new URLSearchParams(location.search).get("redirect") || "/"
  const submitHandler = (e) => {
    e.preventDefault() // Prevent default form submission behavior
    if (password !== confirmPassword) {
      setMessage("Passwords do not match")
    } else {
      navigate(redirect) // Redirect to the specified path
    }
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <div className='alert alert-danger'>{message}</div>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Your password '
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm Your password '
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='success' className='my-2'>
          Sign Up
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an account?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Sign In
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
