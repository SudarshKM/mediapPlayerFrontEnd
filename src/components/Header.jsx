import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';



export default function Header() {
  return (
    <>
     <Navbar className="bg-transparent border border-secondary rounded">
        {/* <Container> */}
          <Navbar.Brand href="#home">
          <FontAwesomeIcon className='text-warning ms-5 fs-3' icon={faVideo} fade />  
          <span className='text-warning  fs-3'>  Flow</span>
          </Navbar.Brand>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

