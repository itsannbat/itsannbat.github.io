import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './AB-logos_black.png';
import Image from 'react-bootstrap/Image';
import './index.css';

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Image src={logo} alt="logo" rounded/>
          <Navbar.Brand href="#home">Ann's Website</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Resume</Nav.Link>
            <Nav.Link href="#features">Hobbies</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AlertDismissible;