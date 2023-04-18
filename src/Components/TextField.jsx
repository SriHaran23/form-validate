import React from 'react'
import { ErrorMessage, Field, useField } from 'formik'

function TextField({label, ...props}) {
    const [field] =useField(props);
  return (
    <div className='text-start'>
        <label htmlFor={field.name}>{label}</label>
        <Field className='form-control shadow-none' {...field} {...props} autoComplete='off' />
        <div className="text-danger"><ErrorMessage name={field.name} ></ErrorMessage></div>
    </div>
  )
}

export default TextField
