import React from 'react'

function BlogList({blogs,setBlogs}) {
    console.log(blogs)
    const del=(i)=>{
      const confirmBox = window.confirm(
          "Do you really want to delete ?"
      )
      if (confirmBox) {
          const temp= [...blogs];
          temp.splice(i,1);
          setBlogs([...temp])
      }
  }
  return (
    <div>
      <table className="table table-bordered table-responsive my-4">
        <thead>
          <tr className='text-center'>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            {
                blogs.map((row, i) => {
                    return <tr key={i}>
                        <td>{row.id}</td>
                        <td>{row.title}</td>
                        <td>{row.body}</td>
                        <td><button onClick={()=>{del(i)}} className='btn btn-danger'>Del</button></td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default BlogList