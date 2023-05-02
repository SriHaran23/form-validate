import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { useState, useEffect, useContext, createContext, useRef } from 'react'
import * as Yup from 'yup'
import TextField from './TextField'
import { useNavigate } from 'react-router-dom';

function Formval1() {
    const [details,setDetails]= useState([])
    const [count,setCount]= useState()
    const navigate = useNavigate()
    const initialValues={
        firstname:"",
        lastname:"",
        username:"",
        email:"",
        number:"",
        district:"",
        state:"",
        gender:"",
        agreecheck:false,
    }
    // const phoneRegExp = /^((\\+[1-9]{1,3}[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema=Yup.object({
        firstname:Yup.string().min(3).matches(/^[a-zA-Z\s]*$/,'firstname should not contain numbers or specialcharacters').required(),
        lastname:Yup.string().min(3).matches(/^[a-zA-Z\s]*$/, 'lastname should not contain numbers or specialcharacters').required(),
        username:Yup.string().min(3).matches(/^[a-zA-Z\s]*$/, 'username should not contain numbers or specialcharacters').required(),
        email:Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Please enter a valid email').required(),
        number: Yup.number().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").min(1000000000,"Phone number should be 10 digits").max(9999999999,"Phone number should be 10 digits").required('A phone number is required'),
        district:Yup.string().min(3).matches(/^[a-zA-Z\s]*$/, 'Please enter a valid district').required(),
        state:Yup.string().required(),
        gender:Yup.string().required(),
        agreecheck:Yup.bool().oneOf([true], 'You need to accept the terms and conditions'),
    });
    const onsubmit=(values)=>{
        console.log("form details",values);
        let res = [...details,values]
        setDetails(res)
        localStorage.setItem("form",JSON.stringify(res))
    }
    useEffect(()=>{
        const str = localStorage.getItem("form")
        if(str){
            setDetails(JSON.parse(str))
        }
    },[])
    const clear=()=>{
        const confirmBox = window.confirm(
            "Do you really want to CLear All records ?"
        )
        if (confirmBox) {
            details.splice(0);
            let res =[...details]
            setDetails(res)
            localStorage.setItem("form",JSON.stringify(res))
        }
    }
    const del=(i)=>{
        const confirmBox = window.confirm(
            "Do you really want to delete ?"
        )
        if (confirmBox) {
            const temp= [...details];
            temp.splice(i,1);
            let res =[...temp]
            setDetails(res)
            localStorage.setItem("form",JSON.stringify(res))
        }
    }
    let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    setCount(ref.current)
    // alert('You clicked ' + ref.current + ' times!');
  }
  function handleClick1() {
    if (ref.current!==0) {
        ref.current = ref.current - 1;
    }
    setCount(ref.current)
    // alert('You clicked ' + ref.current + ' times!');
  }
  return (
    <div className=' container '>
        <h1>Form</h1>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm })=>{
                onsubmit(values)
                resetForm();
            }}
        >
            <Form>
                <div className="row p-md-5 p-1 border m-0">
                    <div className="col-md-6 col-sm-12 mb-3">
                        <TextField label="First Name" name="firstname" type="text"></TextField>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                        <TextField label="Last Name" name="lastname" type="text"></TextField>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                        <TextField label="User Name" name="username" type="text"></TextField>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                        <TextField label="Email" name="email" type="text"></TextField>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                        <TextField label="Number" name="number" type="text"></TextField>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                        <TextField label="District" name="district" type="text"></TextField>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                        <TextField label="State" name="state" as="select">
                            <option value="select">--select one--</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Tamilnadu">Tamilnadu</option>
                        </TextField>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                        <label className=''>Gender</label>
                        <div className=" mt-2">
                            <label>
                                <Field className="ms-3 me-2" type="radio" name="gender" value="male" />
                                Male
                            </label>
                            <label>
                                <Field className="ms-3 me-2" type="radio" name="gender" value="female" />
                                Female
                            </label>
                        </div>
                        <ErrorMessage name="gender" />
                    </div>
                    <div className=' mb-2'>
                        <span className="col-12 d-flex">
                            <Field className="mx-2" type="checkbox" name="agreecheck" placeholder="Name" />
                            <p className=' mt-3'>I have read all <a href=" ">tearms and conditions</a></p>
                        </span>
                        <ErrorMessage name="agreecheck" />
                    </div>
                    <div>
                        <button  className="btn btn-primary float-start" onClick={handleClick} type="submit">Submit</button>
                    </div>
                </div>
            </Form>
        </Formik>
        <div className="table-responsive">
            <table className="table table-bordered table-responsive my-4">
                <thead>
                    <tr>
                        <th colSpan={9}>
                            <div className='d-flex justify-content-between mx-5'>
                                <h1>Details</h1>
                                <button onClick={()=>{clear()}} className='btn btn-warning m-2'>Clear All</button>
                            </div>
                        </th>
                    </tr>
                    <tr className='text-center'>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Number</th>
                        <th scope="col">State</th>
                        <th scope="col">District</th>
                        <th scope="col">Gender</th>
                        <th scope="col" colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        details.map((row, i) => {
                            return <tr key={i}>
                                <td>{row.firstname}</td>
                                <td>{row.lastname}</td>
                                <td>{row.email}</td>
                                <td>{row.number}</td>
                                <td>{row.state}</td>
                                <td>{row.district}</td>
                                <td>{row.gender}</td>
                                <td><button onClick={()=>{del(i)}} className='btn btn-danger'>Del</button></td>
                                <td><button onClick={()=>{navigate('/edit',{state:{row,i}})}} className='btn btn-info'>Edit</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <button className='btn btn-outline-danger' onClick={handleClick1}>-</button>
            <button className='btn btn-outline-success' onClick={handleClick}>+</button>
            <p>Counter: {count}</p>
        </div>
    </div>
  )
}

export default Formval1