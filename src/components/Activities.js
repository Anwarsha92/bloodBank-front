import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import './Activities.css'


function Activities() {

  useEffect(() => {
    localStorage.removeItem("username")
})
  return (
    <div>
      <Header></Header>
      <div className='text-center container mt-5 w-75'>
        <p>
          Our activities are done for the benefit, assistance, and relief of people in need. 
          For instance, providing the victims of war, natural disasters, epidemics, poverty,
           with food, shelter, medical assistance, and other basic needs. When carried out 
           selflessly, it is a one-way act where an individual gives and asks for nothing in return.
        </p>
        <div className='imagediv'>
          <img className='images' src="https://www.globalgiving.org/uploads/2018/08/22/KeralaFloods_Facebook.jpg" alt="" />
          <img className='images' src="https://www.atmafoundation.org/assets/img/work1.jpg" alt="" />
          <img className='images' src="https://kleit.ac.in/wp-content/uploads/2021/08/Blood-Donation.jpg" alt="" />
          <img className='images' src="https://indusscrolls.com/wp-content/uploads/2020/04/seva-4.jpg" alt="" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Activities