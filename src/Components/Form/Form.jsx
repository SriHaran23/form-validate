import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as Yup from 'yup'

function Formval() {
    const [details,setDetails]= useState([])
    const data = useLocation()
    const navigate = useNavigate();
    const initialValues={
        firstname:data?.state?.row?.firstname,
        lastname:data?.state?.row?.lastname,
        username:data?.state?.row?.username,
        email:data?.state?.row?.email,
        number:data?.state?.row?.number,
        district:data?.state?.row?.district,
        state:data?.state?.row?.state,
        gender:data?.state?.row?.gender,
        // agreecheck:data?.state?.row?.agreecheck,
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
        // agreecheck:Yup.bool().oneOf([true], 'You need to accept the terms and conditions'),
    });
    const onsubmit=(values)=>{
        console.log("form details",values)
        // setDetails([...details,values])
        navigate("/form")
        let temp=[...details]
        temp[data?.state?.i]=values
        console.log("i",temp)
        let res =[...temp]
        setDetails(res)
        localStorage.setItem("form",JSON.stringify(res))
    }
    useEffect(()=>{
        const str = localStorage.getItem("form")
        if(str){
            setDetails(JSON.parse(str))
        }
    },[])
  return (
    <div className='text-black my-5'>
            <h1>Edit Form</h1>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm })=>{
                onsubmit(values)
                resetForm();
            }}
        >
            <Form className='container'>
                <div className="row">
                    <div className="col-md-6 col-sm-12 text-danger mb-3">
                        <label className='text-black'>First Name</label>
                        <Field type="text" name="firstname" className="form-control" placeholder="First Name" />
                        <ErrorMessage name="firstname" />
                    </div>
                    <div className="col-md-6 col-sm-12 text-danger mb-3">
                        <label className='text-black'>Last Name</label>
                        <Field type="text" name="lastname" className="form-control" placeholder="Last Name" />
                        <ErrorMessage name="lastname" />
                    </div>
                    <div className="col-md-6 col-sm-12 text-danger mb-3">
                        <label className='text-black'>User Name</label>
                        <Field type="text" name="username" className="form-control" placeholder="User Name" />
                        <ErrorMessage name="username" />
                    </div>
                    <div className="col-md-6 col-sm-12 text-danger mb-3">
                        <label className='text-black'>EMail</label>
                        <Field type="email" name="email" className="form-control" placeholder="Email" />
                        <ErrorMessage name="email" />
                    </div>
                    <div className="col-md-6 col-sm-12 text-danger mb-3">
                        <label className='text-black'>Number</label>
                        <Field type="text" name="number" className="form-control" placeholder="Mobile Number" pattern="[1-9]{1}[0-9]{9}" />
                        <ErrorMessage name="number" />
                    </div>
                    <div className="col-md-6 col-sm-12 text-danger mb-3">
                        <label className='text-black'>District</label>
                        <Field type="text" name="district" className="form-control" placeholder="District" />
                        <ErrorMessage name="district" />
                    </div>
                    <div className="col-md-6 col-sm-12 text-danger mb-3">
                        <label className='text-black'>District</label>
                        <Field type="text" name="state" className="form-control" placeholder="state" />
                        <ErrorMessage name="state" />
                    </div>
                    {/* <div className="col-md-6 col-sm-12 text-danger mb-3">
                        <label className='text-black'>State</label>
                        <Field as="select" name="state" className="form-control" >
                            <option value="select">--select one--</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Tamilnadu">Tamilnadu</option>
                        </Field>
                        <ErrorMessage name="state" />
                    </div> */}
                    <div className="col-md-6 col-sm-12 text-danger mb-3">
                        <label className='text-black'>Gender</label>
                        <div className="text-black mt-2">
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
                        {/* <div className=' text-danger mb-2'>
                            <span className="col-md-6 col-sm-12 d-flex">
                                <Field className="mx-2" type="checkbox" name="agreecheck" placeholder="Name" />
                                <p className='text-black mt-3'>I have read all <a href="">tearms and conditions</a></p>
                            </span>
                            <ErrorMessage name="agreecheck" />
                        </div> */}
                    <div>
                        <button className="btn btn-success float-end" type="submit">Update</button>
                    </div>
                </div>
            </Form>
        </Formik>
        {/* <table className="table table-bordered table-responsive container my-2">
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Number</th>
                    <th scope="col">State</th>
                    <th scope="col">District</th>
                    <th scope="col">Gender</th>
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
                        </tr>
                    })
                }
            </tbody>
        </table> */}
    </div>
  )
}

export default Formval