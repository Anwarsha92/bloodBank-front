import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import './EditDonor.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { logDOM } from '@testing-library/react'
import Header from './Header'
import Footer from './Footer'


function EditDonor() {

    let location = useNavigate()


    //date

    var curr = new Date();
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substring(0, 10);


    //date



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

    const [gender, setGender] = useState('')

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
            label: "Pathanamthitta"
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

    const [last, setLast] = useState('')




    const params = useParams()
    console.log(params.id);

    const fetchDonor = async () => {
        const result = await axios.get('http://localhost:8081/getDonor/' + params.id)
        setName(result.data.message.name);
        setGender(result.data.message.gender);
        setDob(result.data.message.dob);
        setBlood(result.data.message.blood);
        setDistrict(result.data.message.district);
        setPlace(result.data.message.place);
        setEmail(result.data.message.email);
        setMobile(result.data.message.mobile);
        setLast(result.data.message.last)

        // console.log(name);

    }

    const params1 = params.id

    // console.log(params1);

    const updateDonor = async (e) => {
        e.preventDefault()

        const body = {
            params1,
            name,
            gender,
            district,
            place,
            email,
            mobile,
            last
        }

        // try{
        const result = await axios.post('http://localhost:8081/updateDonor', body)
        alert(result.data.message)

        localStorage.removeItem("username")
        location("/")
        // }
        // catch(error){
        //     alert(error.response.data.message)
        // }
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


    //select border

    const customStyles = {
        control: (base, state) => ({
            ...base,
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "red" : "darkgrey",
            borderWidth: "2px",
            height: "25px",
            // Removes weird border around container
            boxShadow: state.isFocused ? null : null,
            "&:hover": {
                // Overwrittes the different states of border
                borderColor: state.isFocused ? "red" : "darkgrey"
            }
        })
    };

    //select border




    return (
        <div>

            <Header></Header>



            <div className='container' style={{ width: '300px' }}>
                <form onSubmit={(e) => updateDonor(e)}>
                    <table className='table1'>
                        <tbody>
                            <tr>
                                <td><strong>Name</strong></td>
                                <td className='edtails'>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        pattern="^[A-Za-z].{5,}"
                                    />
                                    <span className='inputs '>Name must have minimum 6 charactors</span>

                                </td>
                            </tr>
                            <tr>
                                <td><strong>Gender</strong></td>
                                <td className='edtails'>
                                    <Select
                                        styles={customStyles}
                                        type="text"
                                        // value={gender}
                                        options={genderList}
                                        onChange={(e) => setGender(e.label)}
                                        value={genderList.label}
                                        required
                                    />
                                </td>
                            </tr>
                           
                            <tr>
                                <td><strong>District</strong></td>
                                <td className='edtails'>
                                    <Select
                                        styles={customStyles}
                                        type="text"
                                        options={districtList}
                                        // value={district}
                                        onChange={(e) => setDistrict(e.label)}
                                        defaultValue={district}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Place</strong></td>
                                <td className='edtails'>
                                    <input
                                        type="text"
                                        value={place}
                                        onChange={(e) => setPlace(e.target.value)}
                                        required
                                        pattern="^[A-Za-z].{4,}"
                                    />
                                    <span className='inputs '>Place must have minimum 5 charactors</span>

                                </td>
                            </tr>

                            <tr>
                                <td><strong>Email</strong></td>
                                <td className='edtails'>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <span className='inputs '>Enter valid email</span>

                                </td>
                            </tr>
                            <tr>
                                <td><strong>Mobile</strong></td>
                                <td className='edtails'>
                                    <input
                                        type="text"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        pattern="^[0-9].{9,9}"
                                    />
                                    <span className='inputs'>Enter 10 digit mobile number</span>

                                </td>
                            </tr>
                            <tr>
                                <td><strong>Last Donated On</strong></td>
                                <td className='edtails'>
                                    <input
                                        type="date"
                                        max={date}
                                        value={last}
                                        onChange={(e) => setLast(e.target.value)}
                                        pattern="^[0-9].{9,9}"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='text-center'>
                    <button onClick={() => location(-1)} className='edit fs-5'  style={{color:'blue',backgroundColor:'unset',border:'none'}}><i class="las la-angle-double-left"></i><strong>Back</strong></button>

                        <button className='edit fs-5'  style={{color:'green',backgroundColor:'unset',border:'none'}}><i class="las la-check"></i><strong>Update</strong></button>
                    </div>
                </form>

            </div>


           
            <Footer></Footer>


        </div>
    )
}

export default EditDonor