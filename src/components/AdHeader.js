import React from 'react'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import Guideline from './Guideline';



function AdHeader() {



  return (
    <div className='pt-5'>


      <div style={{}} className=' '>
        <div className='d-flex rela container '>
          <div className=' kl29' style={{ minwidth: '100px' }}>
            <span className='fs-2'><strong>KL</strong><span style={{ fontSize: '55px', color: 'red' }} ><strong>29</strong></span><span className='fs-3 care text-success' >Care&Charity</span></span> <br />
            <span className='fs-2'><span style={{ color: 'red' }}><strong>Blood</strong></span>Bank.com</span>
          </div>

          <div style={{ width: '900px', overflow: 'hidden', height: '50px' }}>
            <p class="marquee">
              <span style={{ fontSize: '30px', color: 'red' }}><strong>Donate Blood - SAVE A LIFE - Become A HERO&nbsp;</strong></span>
            </p>

          </div>
        </div>



        <Navbar style={{ minHeight: '40px' }} className='mt-2 Navbar p-0 bg-primary w-100 container' expand="lg">
          <Container>
            <Navbar.Brand className='text-white' style={{}} href="/">HOME</Navbar.Brand>
            <Navbar.Toggle style={{ fontSize: '14px' }} className='text-white bg-white ' aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >



              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default AdHeader