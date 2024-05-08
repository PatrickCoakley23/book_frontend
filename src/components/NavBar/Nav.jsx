import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { KargoLogo } from '../../constants/images';

const Nav = () => {
  return (
    <Navbar className='mb-4'>
    <Container>
      <Navbar.Brand href="/">
            <img
              alt=""
              src={KargoLogo}
              width="100"
              height="30"
              className="d-inline-block align-middle"
            />
            <Navbar.Text>
              Booklist
            </Navbar.Text>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Nav