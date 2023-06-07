import React, { useEffect, useState } from 'react'
import './Home.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Header from './Header';
import Footer from './Footer';

// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css';



function Home() {


    //date picker



    // const [startDate, setStartDate] = useState(new Date());


    //date picker



    //select border

    const customStyles = {
        control: (base, state) => ({
            ...base,
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "red" : "lightgrey",
            borderWidth: "2px",
            height: "25px",
            // Removes weird border around container
            boxShadow: state.isFocused ? null : null,
            "&:hover": {
                // Overwrittes the different states of border
                borderColor: state.isFocused ? "red" : "lightgrey"
            }
        })
    };

    //select border



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
        errName: false,
        errPlace: false,
        errEmail: false,
        errMobilere: false,
        errUsernamere: false,
        errPasswordre: false,
        errConPsw: false,

    })


    // --------------------------------------------------------------------------------------------------

    // Login appi

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(linputs);
        // console.log(linputs.mobile);

        const body = {
            username: linputs.username,
            psw: linputs.password
        }


        try {
            const result = await axios.post('http://localhost:8081/logIn', body)
            alert(result.data.message)
            localStorage.setItem("username", result.data.username)
            // console.log(localStorage.getItem("mobilenum"));
            location(`donor/${result.data.username}`)
        }
        catch (error) {
            alert(error.response.data.message);
            window.location.reload(true)

        }

    }


    // Login appi

    // -------------------------------------------------------------------------------------------------------------


    // Login handlechange

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setLinputs({ ...linputs, [name]: value })
    }

    // Login handlechange


    // Register 

    const [name, setName] = useState('')

    // const [selects, setGender] = useState('')

    var genderList = [
        {
            value: 1,
            label: "Male"
        },
        {
            value: 2,
            label: "Female"
        },
        {
            value: 3,
            label: "Other"
        },
    ]

    const [gender, setGender] = useState(genderList.label)

    const [dob, setDob] = useState('')


    var bloodGroupList = [
        {
            value: 1,
            label: "A+"
        },
        {
            value: 1,
            label: "A-"
        },
        {
            value: 1,
            label: "B+"
        },
        {
            value: 1,
            label: "B-"
        },
        {
            value: 1,
            label: "AB+"
        },
        {
            value: 1,
            label: "AB-"
        },
        {
            value: 1,
            label: "O+"
        },
        {
            value: 1,
            label: "O-"
        },
        {
            value: 1,
            label: "A1+"
        },
        {
            value: 1,
            label: "A1-"
        },
        {
            value: 1,
            label: "A2+"
        },
        {
            value: 1,
            label: "A2-"
        },
        {
            value: 1,
            label: "A1B+"
        },
        {
            value: 1,
            label: "A1B-"
        },
        {
            value: 1,
            label: "A2B+"
        },
        {
            value: 1,
            label: "A2B-"
        },
    ]

    const [blood, setBlood] = useState(bloodGroupList.label)

    var districtList = [
        {
            value: 1,
            label: "Thiruvananthapuram"
        },
        {
            value: 1,
            label: "Kollam"
        },
        {
            value: 1,
            label: "Patahanamthitta"
        },
        {
            value: 1,
            label: "Alappuzha"
        },
        {
            value: 1,
            label: "Kottayam"
        },
        {
            value: 1,
            label: "Idukki"
        },
        {
            value: 1,
            label: "Eranakulam"
        },
        {
            value: 1,
            label: "Thrissur"
        },
        {
            value: 1,
            label: "Palakkadu"
        },
        {
            value: 1,
            label: "Malappuram"
        },
        {
            value: 1,
            label: "Kozhikkodu"
        },
        {
            value: 1,
            label: "Wayanadu"
        },
        {
            value: 1,
            label: "Kannur"
        },
        {
            value: 1,
            label: "Kasarkodu"
        }
    ]

    const [district, setDistrict] = useState('')

    const [place, setPlace] = useState('')

    const [email, setEmail] = useState('')

    const [mobile, setMobile] = useState('')

    const last = ''

    const [username, setUsername] = useState('')

    const [psw, setPsw] = useState('')

    const [conpsw, setConpsw] = useState('')



    // Register 


    // ------------------------------------------------------------------------------------------

    // Register Api

    const registerDonor = async (e) => {

        e.preventDefault()


        const body = {
            name,
            gender,
            dob,
            blood,
            district,
            place,
            email,
            mobile,
            last,
            username,
            psw,
            conpsw

        }
        try {

            const result = await axios.post('http://localhost:8081/registerDonor', body)

            alert(result.data.message)
            window.location.reload(true)
            location('/')

        }
        catch (error) {
            alert(error.response.data.message);
        }



        // console.log(name);
        // console.log(gender);
        // console.log(dob);
        // console.log(blood);
        // console.log(email);
        // console.log(mobile);
        // console.log(psw);
        // console.log(conpsw);



    }
    // Register Api

    // --------------------------------------------------------------------------------------------------------------------


    // Search List

    var searchBloodGroupList = [
        {
            value: 1,
            label: "A+"
        },
        {
            value: 1,
            label: "A-"
        },
        {
            value: 1,
            label: "B+"
        },
        {
            value: 1,
            label: "B-"
        },
        {
            value: 1,
            label: "AB+"
        },
        {
            value: 1,
            label: "AB-"
        },
        {
            value: 1,
            label: "O+"
        },
        {
            value: 1,
            label: "O-"
        },
        {
            value: 1,
            label: "A1+"
        },
        {
            value: 1,
            label: "A1-"
        },
        {
            value: 1,
            label: "A2+"
        },
        {
            value: 1,
            label: "A2-"
        },
        {
            value: 1,
            label: "A1B+"
        },
        {
            value: 1,
            label: "A1B-"
        },
        {
            value: 1,
            label: "A2B+"
        },
        {
            value: 1,
            label: "A2B-"
        },
    ]

    const [bloodSearch, setBloodSearch] = useState(searchBloodGroupList.label)


    var placeListSearch = [
        {
            value: 1,
            label: "Thiruvananthapuram"
        },
        {
            value: 1,
            label: "Kollam"
        },
        {
            value: 1,
            label: "Patahanamthitta"
        },
        {
            value: 1,
            label: "Alappuzha"
        },
        {
            value: 1,
            label: "Kottayam"
        },
        {
            value: 1,
            label: "Idukki"
        },
        {
            value: 1,
            label: "Eranakulam"
        },
        {
            value: 1,
            label: "Thrissur"
        },
        {
            value: 1,
            label: "Palakkadu"
        },
        {
            value: 1,
            label: "Malappuram"
        },
        {
            value: 1,
            label: "Kozhikkodu"
        },
        {
            value: 1,
            label: "Wayanadu"
        },
        {
            value: 1,
            label: "Kannur"
        },
        {
            value: 1,
            label: "Kasarkodu"
        }
    ]

    const [districtSearch, setdistrictSearch] = useState('')

    // Search List



    //Search API

    const searchDonor = async (e) => {

        location(`search/${bloodSearch}/${districtSearch}`)



    }

    // Search API

    useEffect(() => {
        localStorage.removeItem("username")
    })


    return (
        <div>

            <Header></Header>


            <div id='home'>


                <div className='container ' id='box1' style={{ width: '85%' }}>


                    {/* SEARCH DONOR */}

                    <div className='search text-center'>

                        <div ><h4 ><strong>Search <span className='text-danger'>Blood</span> Donors</strong></h4></div>
                        <div>
                            <form
                                onSubmit={(e) => searchDonor(e)}
                                className=' mb-5' action="">
    
    
                                <div className='searchblood'>
                                    <div >
                                        <Select placeholder='BloodGroup' onChange={(e) => setBloodSearch(e.label)} styles={customStyles} className='w-100 select' options={searchBloodGroupList} required></Select>
    
                                    </div>
    
    
                                    <div >
    
                                        <Select placeholder='District' onChange={(e) => setdistrictSearch(e.label)} styles={customStyles} className='w-100' options={placeListSearch} required></Select>
    
                                    </div>
    
                                    <div>
                                        {/* <Link to={`search/${bloodSearch}/${districtSearch}`}> */}
                                        <button style={{ width: '100px' }} className='edit btn btn-danger button-62'>Search</button>
                                        {/* </Link> */}
                                    </div>
                                </div>
    
    
                            </form>
                        </div>
                        
                        <div className='d-flex justify-content-center'><img style={{}} className='imageb mt-2' src="https://media.defense.gov/2019/Nov/25/2002216604/1920/1080/0/191206-F-PO640-013.JPG" alt="" /></div>

                        {/* <div className='mt-5'>
                                <ul>
                                    <li>Be the reason for someone’s heartbeat.</li>
                                    <li>Donate <span style={{color:'red'}}>blood</span>. Not on roads but in <span style={{color:'red'}}>blood</span> donation camps.</li>
                                    <li>A single drop of <span style={{color:'red'}}>blood</span> can make a huge difference.</li>
                                    <li>Stay fit and eat right and donate <span style={{color:'red'}}>blood</span>.</li>
                                    <li>The gift of <span style={{color:'red'}}>blood</span> is a gift to someone’s life.</li>
                                    <li>Donate <span style={{color:'red'}}>blood</span> and be the reason for someone’s existence.</li>
                                    <li>You can become a superhero too. Just donate a bag of <span style={{color:'red'}}>blood</span>.</li>
                                </ul>
                            </div> */}

                    </div>



                    {/* LOGIN DONOR */}


                    <div>

                        <div>
                            <form onSubmit={(e) => handleSubmit(e)} className="form2">

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
                                    <span className='inputs'>Username must have minimum 6 charactors</span>
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
                                    <span className='inputs'>Password must have minimum 6 charactors</span>
                                </div>
                                <div className='text-center'>
                                    <button style={{ width: '100px' }} className='edit btn btn-danger button-62'>Login</button>
                                    {/* <p><a style={{ color: 'white' }} href="">Forgot password?</a></p> */}
                                </div>
                            </form>
                        </div>




                        {/* REGISTER DONOR */}

                        <form onSubmit={(e) => registerDonor(e)} className='form2 mt-5' action="">
                            <h3 className='text-center text-primary zoom-in-zoom-out '><strong><u>Register as a <span className='text-danger'>Donor</span></u></strong></h3>
                            <div className='redisterinp'>
                                <label htmlFor="">Name</label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    className='form-control '
                                    style={{ height: '35px', width: '100%' }}
                                    onBlur={() => setFocus({ ...focus, errName: true })}
                                    focus={focus.errName.toString()}
                                    type="text"
                                    required
                                    pattern="^[A-Za-z].{5,}"
                                />
                                <span className='inputs '>Name must have minimum 6 charactors</span>



                            </div>

                            <div className='redisterinp'>
                                <label htmlFor="">Gender</label>


                                <Select onChange={(e) => setGender(e.label)} styles={customStyles} className='w-100' options={genderList} required></Select>
                                {/* <select onChange={(e) => setGender(e.target.value)} value={selects} className='form-control' style={{ height: '35px', width: '100%' }} name="" id="">
                                    <option value="">-select gender-</option>
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                    <option value="">Other</option>
                                </select> */}
                            </div>

                            <div className=''>
                                <label htmlFor="">Date of Birth</label>

                                {/* <DatePicker 
                                 selected={startDate}  onChange={(date) => setStartDate(date)} 
                                /> */}

                                <input
                                    type='date'
                                    max={"2005-12-31"}
                                    onChange={(e) => setDob(e.target.value)}
                                    className='form-control'
                                    // style={{ height: '35px', width: '100%', fontSize: 'small', fontWeight: 'lighter' }}
                                    required
                                />
                            </div>

                            <div className='redisterinp'>
                                <label htmlFor="">Blood Group</label>
                                <Select onChange={(e) => setBlood(e.label)} styles={customStyles} className='w-100' options={bloodGroupList} required></Select>

                            </div>

                            <div className='redisterinp'>
                                <label htmlFor="">District</label>


                                <Select onChange={(e) => setDistrict(e.label)} styles={customStyles} className='w-100' options={districtList} required></Select>

                            </div>

                            <div className='redisterinp'>
                                <label htmlFor="">Place</label>
                                <input
                                    onChange={(e) => setPlace(e.target.value)}
                                    className='form-control'
                                    style={{ height: '35px', width: '100%' }}
                                    type='text'
                                    onBlur={() => setFocus({ ...focus, errPlace: true })}
                                    focus={focus.errPlace.toString()}
                                    pattern='^[A-Za-z].{4,}'
                                    required
                                />
                                <span className='inputs '>Place must have minimum 5 charactors</span>


                            </div>

                            <div className='redisterinp'>
                                <label htmlFor="">Email</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='form-control'
                                    style={{ height: '35px', width: '100%' }}
                                    type='email'
                                    onBlur={() => setFocus({ ...focus, errEmail: true })}
                                    focus={focus.errEmail.toString()}
                                    required
                                />
                                <span className='inputs '>Enter valid email</span>


                            </div>


                            <div className='redisterinp'>
                                <label htmlFor="">Mobile</label>
                                <input
                                    onChange={(e) => setMobile(e.target.value)}
                                    className='form-control'
                                    style={{ height: '35px', width: '100%' }}
                                    type='text'
                                    onBlur={() => setFocus({ ...focus, errMobilere: true })}
                                    focus={focus.errMobilere.toString()}
                                    required
                                    pattern="^[0-9].{9,9}"
                                />

                                <span className='inputs'>Enter 10 digit mobile number</span>

                            </div>

                            <div className='redisterinp'>
                                <label htmlFor="">Username</label>
                                <input
                                    onChange={(e) => setUsername(e.target.value)}
                                    className='form-control'
                                    style={{ height: '35px', width: '100%' }}
                                    type='text'
                                    onBlur={() => setFocus({ ...focus, errUsernamere: true })}
                                    focus={focus.errUsernamere.toString()}
                                    required
                                    pattern="^[A-Za-z0-9].{5,}"
                                />

                                <span className='inputs'>Username must have minimum 6 charactors</span>

                            </div>

                            <div className='redisterinp'>
                                <label htmlFor="">Password</label>
                                <input
                                    onChange={(e) => setPsw(e.target.value)}
                                    className='form-control'
                                    style={{ height: '35px', width: '100%' }}
                                    type="text"
                                    onBlur={() => setFocus({ ...focus, errPasswordre: true })}
                                    focus={focus.errPasswordre.toString()}
                                    required
                                    pattern="^[A-Za-z0-9].{5,}"
                                />

                                <span className='inputs'>Password must have minimum 6 charactors</span>

                            </div>

                            <div className='redisterinp'>
                                <label htmlFor="">Confirm Password</label>
                                <input
                                    onChange={(e) => setConpsw(e.target.value)}
                                    className='form-control'
                                    style={{ height: '35px', width: '100%' }}
                                    type="text"
                                    onBlur={() => setFocus({ ...focus, errConPsw: true })}
                                    focus={focus.errConPsw.toString()}
                                    required
                                    pattern={psw}
                                />

                                <span className='inputs'>Password not matching</span>

                            </div>
                            <div className='text-center'>
                                <button className='edit btn btn-danger button-62'>Register</button>
                                {/* <a href='/' className='btn btn-danger '>Reset</a> */}
                            </div>

                        </form>
                    </div>
                </div>



            </div>

            <Footer></Footer>

        </div>
    )
}

export default Home