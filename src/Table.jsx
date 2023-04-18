import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Table() {
    const navigate=useNavigate();
    const data=useLocation();
    const [tableData,setTableData]=usestate([{}])
  return (
    <div className='container'>
        <div><button onClick={()=>{navigate('/form')}}>Add</button></div>
        <table class="table table-bordered table-responsive">
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Number</th>
                    <th scope="col">State</th>
                    <th scope="col">Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((row, i) => {
                        return <tr key={i}>
                            <td>{row.state.details.firstname}</td>
                            <td>{row.state.details.lastname}</td>
                            <td>{row.state.details.username}</td>
                            <td>{row.state.details.email}</td>
                            <td>{row.state.details.number}</td>
                            <td>{row.state.details.state}</td>
                            <td>{row.state.details.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table