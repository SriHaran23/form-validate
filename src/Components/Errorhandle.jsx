import React from 'react';
import { useState,useEffect } from 'react';
import BlogList from './BlogList';

function Errorhandling() {
    const [blogs,setBlogs]= useState(null);
    const[ispending,setIspending]=useState(true);
    const  [error,setError]=useState(null);
    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                if(!res.ok){
                      throw Error('could not fetech the data from the resource')
                }
                return res.json()
            })
            .then(data=>{
                setBlogs(data);
                setIspending(false);
                setError(null);
            })
            .catch(err=>{
                setIspending(false);
                setError(err.message);
                console.log(err.message);
            })
        },1000)
      
    }, []);
  return (
    <div>
        <h1>Errorhandling</h1>
        {error &&  <div>{error}</div>}
        {ispending && <div>Loading....</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
    </div>
  )
}

export default Errorhandling