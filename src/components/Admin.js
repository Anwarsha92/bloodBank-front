import React, { useState } from 'react'
import AdHeader from './AdHeader'
import './Admin.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Admin() {


  let location = useNavigate()
  const [uname, setUname] = useState('')
  const [pswd, setPswd] = useState('')

  const [focus, setFocus] = useState({
    errUname: false,
    errPswd: false
  })

  const loginAdmin = async (e) => {

    e.preventDefault()
    const body = {
      uname,
      pswd
    }

    try {
      const result = await axios.post('http://localhost:8081/adminLogin', body)
      alert(result.data.message)
      localStorage.setItem("uname", result.data.uname)
      location('/adminDash')

      console.log(uname);
    }

    catch (error) {
      alert(error.response.data.message);
      window.location.reload(true)

    }
  }
  return (
    <div>
      <AdHeader></AdHeader>

      <div className='container text-center pt-5' style={{ width: '300px' }}>
        <form onSubmit={(e) => loginAdmin(e)}>
          <div >
            <div className='adinputs'>
              <label htmlFor="">Username</label>
              <input
                type="text"
                onChange={(e) => setUname(e.target.value)}
                onBlur={()=>setFocus({...focus,errUname:true})}
                focus={focus.errUname.toString()}
                pattern="^[A-Za-z0-9].{4,}"
                required
              />
  
              <span className='errinputs'>Username must have minimum 5 charactors</span>
            </div>

            <div className='adinputs mt-5'>
              <label htmlFor="">Password</label>
              <input
                type="password"
                onChange={(e) => setPswd(e.target.value)}
                onBlur={()=>setFocus({...focus,errPswd:true})}
                focus={focus.errPswd.toString()}
                pattern="^[A-Za-z0-9].{4,}"
                required
              />
              <span className='errinputs'>Password must have minimum 5 charactors</span>
            </div>
          </div>

          <div className='mt-4'>
            <button className='w-75 edit button-62' >Login</button>
          </div>
        </form>
        <button onClick={() => location('/')} className='edit fs-5 mt-3' style={{ color: 'green', backgroundColor: 'unset', border: 'none' }}><i class="las la-angle-double-left"></i>Back to Home</button>

      </div>

      <div >
        <div className='text-center footer' style={{ height: '100px' }}>

          KL29 <span className='text-primary'>Blood</span> Bank  &copy; 2023. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Admin