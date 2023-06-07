import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Search.css'
import Header from './Header'
import Footer from './Footer'


function Search() {

  const [donorsList, setDonorsList] = useState([])

  const params = useParams()

  const params1=params.id
  const params2=params.name

  const fetchDonorsList = async (e) => {
    // e.preventDefault()

    const body={
      blood:params1,
      district:params2
    }
    
    try{
      const result = await axios.post('http://localhost:8081/donorsList',body)
    setDonorsList(result.data.donors)
    }
    catch(error){
      alert(error.response.data.message)
    }

  }

  console.log(donorsList);
  // console.log(searchList.name);

  useEffect(() => {
    fetchDonorsList()
  }, [])

  return (
    <div>

<Header></Header>

      <div className='container w-100'>
        <table className='container'>
          <thead style={{borderBottom:'2px red solid'}}>
              <th>Sl.No</th>
              <th>Name</th>
              <th>Blood Group</th>
              <th>Place</th>
              <th>District</th>
              <th>Mobile</th>
          </thead>
          <tbody>
            {donorsList?(donorsList.map((list, index) => (

              <tr style={{borderBottom:'1px red solid'}}>
                <td>{index+1}</td>
                <td>{list.name}</td>
                <td>{list.blood}</td>
                <td>{list.place}</td>
                <td>{list.district}</td>
                <td>{list.mobile}</td>
              </tr>

            ))):""}

          </tbody>
        </table>
      </div>
      <Footer></Footer>

    </div>
  )
}

export default Search