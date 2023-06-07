import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Donor.css'
import Header from './Header';
import Footer from './Footer';




function Donor() {

  let location = useNavigate()

  const [donor, setDonor] = useState([])

  const params = useParams()
  console.log(params.id);

  const fetchDonor = async () => {
    const result = await axios.get('http://localhost:8081/getDonor/' + params.id)
    setDonor(result.data.message)

  }

  console.log(donor);

  const logOut=(e)=>{
    // e.preventDefault()
    localStorage.removeItem("username")  
    location("/")

  }


  const deleteProfile=async()=>{

    try{

      const result=await axios.delete('http://localhost:8081/deleteProfile/'+ params.id)
    alert(result.data.message)
    // fetchDonor()
    location("/")
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
    <div>
            <Header></Header>

      <div className='container d-flex justify-content-between mt-3'>
        {/* <div></div> */}
        <div><h6 className='text-center'>Welcome  <span style={{ fontWeight: 'bolder',fontSize:'larger',color:'red' }}> { donor.name}</span></h6></div>
        <div>
          <button onClick={(e) => logOut(e)} className='edit btn btn-danger button-62'>Logout</button>
        </div>
      </div>
      <div className='container mb-3' id='accord'>

        <Accordion  >
          <Accordion.Item  eventKey="0">
            <Accordion.Header >My Profile</Accordion.Header>
            <Accordion.Body >
              <div className='d-flex justify-content-end'><button onClick={()=>deleteProfile(params.id)} className='btn btn-primary'>Delete Profile</button></div>
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
                <Link to={`/edit/${donor.username}`}><button className='edit btn btn-danger button-62'>Edit Profile</button></Link>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/* <div className='d-flex justify-content-center'><img style={{}} className='imagec' src="https://www.sankalpindia.net/sites/default/files/images/donate_blood_lg_clr.gif" alt="" /></div> */}

      </div>

      <Footer></Footer>

    </div>
  )
}

export default Donor