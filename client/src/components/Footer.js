import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col className='text-center py-1 bg-dark text-white'>
            Copyright &copy; 2025 Fiver
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
