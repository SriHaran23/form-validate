import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate()
    return (
    <div>
        <div className="container w-50 d-flex justify-content-around my-5">
            <button className='btn btn-outline-info' onClick={()=>{navigate('/form')}}>Form</button>
            <button className='btn btn-outline-success' onClick={()=>{navigate('/food')}}>Food</button>
            <button className='btn btn-outline-primary' onClick={()=>{navigate('/errorhandling')}}>Errorhandling</button>
            <button className='btn btn-outline-warning' onClick={()=>{navigate('/pagination')}}>Pagination</button>
            <button className='btn btn-outline-danger' onClick={()=>{navigate('/translation')}}>Translation</button>
        </div>
    </div>
  )
}

export default Dashboard