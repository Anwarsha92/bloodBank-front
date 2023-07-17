import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Donor.css'
import Header from './Header';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';




function Donor() {

  let location = useNavigate()

  const [donor, setDonor] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const params = useParams()
  console.log(params.id);

  const fetchDonor = async () => {
    const result = await axios.get('http://localhost:8081/getDonor/' + params.id)
    setDonor(result.data.message)

  }

  

  const confirmation=()=>{
    setShow(true)

  }

  const deleteProfile=async()=>{
    setShow(false)

    try{

      const result=await axios.delete('http://localhost:8081/deleteProfile/'+ params.id)
      setTimeout(() => {
        alert(result.data.message);location("/")
      }, 200);
    }
    catch(error){
      alert(error.response.data.message)
    }

    

  }


  useEffect(() => {
    if (!localStorage.getItem("username")) {
      alert('Please login')
      location("/")
    }
    else {
      fetchDonor()

    }
  }, [])

  return (
    <div className=''>
            <Header></Header>

      <div className='container d-flex justify-content-between mt-3'>
        <div><h6 className='text-center'>Welcome  <span style={{ fontWeight: 'bolder',fontSize:'larger',color:'red' }}> { donor.name}</span></h6></div>
        {/* <div>
          <button onClick={(e) => logOut(e)} className='edit button-62'>Logout</button>
        </div> */}
      </div>
      <div className='container mb-3' id='accord'>


      <Modal style={{marginTop:'150px'}} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'>Alert !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete?</Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose} style={{color:'white',backgroundColor:'green',border:'none',fontWeight:'bolder'}}>
            No
          </button>
          <button onClick={() => deleteProfile(params.id)} style={{color:'white',backgroundColor:'red',border:'none',fontWeight:'bolder'}}>
            Yes
          </button>
        </Modal.Footer>
      </Modal>


        

        <Accordion  >
          <Accordion.Item  eventKey="0">
            <Accordion.Header><span className='text-danger'>My Profile</span></Accordion.Header>
            <Accordion.Body className='' >
              <div className='d-flex justify-content-end'>
              <Link to={`/edit/${donor.username}`}><button className='edit fs-3'  style={{color:'green',backgroundColor:'unset',border:'none'}}><i class="las la-user-edit"></i></button></Link>
                <button onClick={()=>confirmation()} className='edit fs-3'  style={{color:'red',backgroundColor:'unset',border:'none',fontWeight:'bolder'}}><i class="las la-user-times"></i></button></div>
              <div id='donor'>
                <div >
                  <h6>Name : <span>{donor.name}</span></h6>
                  <h6>Gender : <span>{donor.gender}</span></h6>
                  <h6>DOB : <span>{donor.dob}</span></h6>
                  <h6>Blood Group : <span style={{ color: 'red' }}>{donor.blood}</span></h6>
                  <h6>District : <span>{donor.district}</span></h6>
                  <h6>Place : <span>{donor.place}</span></h6>
                  <h6>Email : <span>{donor.email}</span></h6>
                  <h6>Mobile : <span>{donor.mobile}</span></h6>
                  <h6>Last Donated Date : <span>{donor.last}</span></h6>
                </div>
                <div>
                  <img src="https://i.postimg.cc/RZJv3kyV/icons8-user-150.png" alt="" />
                </div>
              </div>

              <div className='text-center'>
                
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </div>

      <Footer></Footer>

    </div>
  )
}

export default Donor