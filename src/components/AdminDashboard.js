import React, { useEffect, useState } from 'react'
import AdHeader from './AdHeader'
import axios from 'axios'
import './AdminDash.css'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AdminDashboard() {

  let location = useNavigate()
  const [donorsList, setDonorsList] = useState()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const getList = async () => {
    try {
      const result = await axios.get('http://localhost:8081/getDonors')
      setDonorsList(result.data.message)
    }
    catch (error) {
      alert(error.response.data.message);

    }
  }

  const confirmation = () => {
    setShow(true)

  }

  const deleteDonor = async (id) => {
    setShow(false)
    try {
      const result = await axios.delete('http://localhost:8081/deleteDonor/' + id)
      setTimeout(() => {
        alert(result.data.message)
      getList()
        
      }, 200);
      // alert(result.data.message)
      // getList()

    }
    catch (error) {
      alert(error.response.data.message);

    }
  }
  console.log(donorsList);

  const logOut = () => {
    localStorage.removeItem("uname")
    location("/admin")
  }
  useEffect(() => {
    if (!localStorage.getItem("uname")) {
      alert('Please login')
      location("/admin")
    }
    else {
      getList()
    }

  }, [])
  return (
    <div>
      <AdHeader></AdHeader>
      <div className='container'>
        <div className='text-end mt-2'><button onClick={() => logOut()} className='edit button-62'>Logout</button></div>
        <div className=''><h3 className='text-danger text-center'><strong><u>Donors List</u></strong></h3></div>
        <div>
          <div className='cards'>
            {
              donorsList?.map((donor) => (
                <div>



                  <Modal style={{ marginTop: '150px' }} show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title className='text-danger'>Alert !!!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure want to delete?</Modal.Body>
                    <Modal.Footer>
                      <button style={{ color: 'white', backgroundColor: 'green', border: 'none', fontWeight: 'bolder' }} onClick={handleClose}>
                        No
                      </button>
                      <button onClick={() => deleteDonor(donor.username)} style={{ color: 'white', backgroundColor: 'red', border: 'none', fontWeight: 'bolder' }}>
                        Yes
                      </button>
                    </Modal.Footer>
                  </Modal>

                  <div className='bg-primary details text-white'>
                    {/* <div className='text-end'><button onClick={() => deleteDonor(donor.username)} style={{ borderRadius: '50px', backgroundColor: 'darkred', fontSize: 'large', color: 'white' }}><i class="las la-user-times"></i></button></div> */}
                    <div className='text-end'><button onClick={() => confirmation()} style={{ borderRadius: '50px', backgroundColor: 'darkred', fontSize: 'large', color: 'white' }}><i class="las la-user-times"></i></button></div>

                    <p>Name : <span>{donor.name}</span></p>
                    <p>Gender : <span>{donor.gender}</span></p>
                    <p>District : <span>{donor.district}</span></p>
                    <p>Place : <span>{donor.place}</span></p>
                    <p>Mobile : <span>{donor.mobile}</span></p>
                    <p>Email : <span>{donor.email}</span></p>
                    <p>Username : <span>{donor.username}</span></p>
                    <p>DOB : <span>{donor.dob}</span></p>
                  </div>
                </div>


              ))
            }

          </div>
        </div>
      </div>



      <div >
        <div className='text-center footer' style={{ height: '100px' }}>

          KL29 <span className='text-primary'>Blood</span> Bank  &copy; 2023. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard