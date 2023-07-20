import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import Guideline from './Guideline';



function Header() {

  const [showContent, setShowContent] = useState(true);

  let location = useNavigate()


  // Login
  const [linputs, setLinputs] = useState({
    username: '',
    password: ''

  })

  // Login


  const [focus, setFocus] = useState({
    errUsername: false,
    errPassword: false,

  })


  // Login appi

  const handleSubmit = async (e) => {
    e.preventDefault()

    const body = {
      username: linputs.username,
      psw: linputs.password
    }


    try {
      const result = await axios.post('http://localhost:8081/logIn', body)
      alert(result.data.message)
      localStorage.setItem("username", result.data.username)
      location(`/donor/${result.data.username}`)
    }
    catch (error) {
      alert(error.response.data.message);
      window.location.reload(true)

    }

  }


  // Login appi



  // Login handlechange

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setLinputs({ ...linputs, [name]: value })
  }

  // Login handlechange

  const logOut=()=>{
    localStorage.removeItem("username")  
    location("/")

  }

  // logout


  //logout

  useEffect(() => {

    if (localStorage.getItem('username')) {

      setShowContent(false);
    }
  }, []);


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
                <Nav.Link  className='text-white navbar-brand' href="/about">ABOUT</Nav.Link>
                <Nav.Link className='text-white navbar-brand' href="/activities">ACTIVITIES</Nav.Link>
                {/* <Nav.Link className='text-white navbar-brand' href="#action2">COMMUNITY</Nav.Link> */}
                <Nav.Link className='text-white navbar-brand' ><Guideline>GUIDELINE</Guideline></Nav.Link>
              {
                !showContent &&(
                  <Nav.Link className='text-light navbar-brand' href={`/donor/${localStorage.getItem('username')}`}><strong>My Profile</strong></Nav.Link>
                )
              }


              </Nav>
              {showContent ?(
                <div >

                  <form onSubmit={(e) => handleSubmit(e)} >
                    <div className='loginheader'>

                      <div>
                        <input
                          className='form-control'
                          type="text"
                          id='userid'
                          autoComplete='off'
                          name='username'
                          placeholder='Username'
                          value={linputs.username}
                          onChange={handleChange}
                          onBlur={() => setFocus({ ...focus, errUsername: true })}
                          focus={focus.errUsername.toString()}
                          required
                          pattern="^[A-Za-z0-9].{5,}"
                        />
                        <span className='loginputs'>Username must have minimum 6 charactors</span>
                      </div>
                      <div>
                        <input
                          className='form-control'
                          type="password"
                          id='passwordid'
                          name='password'
                          placeholder='Password'
                          value={linputs.password}
                          onChange={handleChange}
                          onBlur={() => setFocus({ ...focus, errPassword: true })}
                          focus={focus.errPassword.toString()}
                          required
                          pattern="^[A-Za-z0-9].{5,}"

                        />
                        <span className='loginputs'>Password must have minimum 6 charactors</span>
                      </div>
                      <div className='text-center'>
                        <button style={{ width: '100px' }} className='edit button-62'>Login</button>
                        {/* <a style={{ color: 'black',fontSize:'x-small' }} href="admin">Login as admin</a> */}
                      </div>
                    </div>
                  </form>

                </div>):<button onClick={(e) => logOut()} className='edit button-62'>Logout</button>}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default Header