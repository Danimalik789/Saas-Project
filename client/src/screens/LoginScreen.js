import React, { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import { Link, useNavigate, useLocation } from "react-router"
import { dummyUsers } from "../data/users"
import FormContainer from "../components/FormContainer"

const LoginScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()
  const location = useLocation()

  const redirect = new URLSearchParams(location.search).get("redirect") || "/"

  const submitHandler = (e) => {
    e.preventDefault()

    const user = dummyUsers.find(
      (u) => u.email === email && u.password === password
    )

    if (user) {
      localStorage.setItem("userInfo", JSON.stringify(user))
      if (user.role === "admin") {
        navigate("/admin/dashboard")
      } else {
        navigate("dashboard/freelancer")
      }
    } else {
      setError("Invalid email or password")
    }

  }

  return (
    <FormContainer>
      <h1>Sign in</h1>
      <Form onSubmit={submitHandler}>

        
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
          <Form.Label>Enter password </Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='success' className='my-2'>
          Sign In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          New Customer? <Link to='/register'>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
