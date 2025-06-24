import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Nav, Container } from "react-bootstrap"

const Header = () => {
  return (
    <header>
      <Navbar
        expand='lg'
        className='bg-success'
        variant='white'
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <strong> Fiver</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/login'>
                <i className='fas fa-user' />
                Sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
