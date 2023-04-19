import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function List({item ,itemindex,setItemindex}) {
    const [cart,setCart]=useState([])
    useEffect(()=>{
        const str = localStorage.getItem("array")
        if(str){
            setCart(JSON.parse(str))
        }
    },[1])
    const add=(i)=>{
        setItemindex(i)
        if(item[i]?.quantity<=0){
            item[i].quantity=item[i]?.quantity+1
        // console.log(item[i]?.quantity)
        }
        console.log(item[itemindex]?.quantity)
    }
    const arr=(a)=>{
        if(item?.food_item_name===a?.food_item_name){
            return true
        }
    }
    return (
    <div className='border border-2 my-3 h-100'>
        <div className='d-flex flex-wrap gap-2 mx-3 mt-3 mb-auto text-center scroll'>
            {item && item.map((row,i) => (
                <div className="card h-50" key={row?.food_item_id}>
                    <div className="card-body">
                        <h5 className="card-title">{row?.food_item_name}</h5>
                        <p>Cost: {row?.food_item_price +" $"}</p>
                        {
                            !cart.find(arr)
                            ?<button className="btn btn-primary" onClick={()=>{add(i)}} >Add to cart</button>
                            :<button className="btn btn-primary" onClick={()=>{add(i)}} disabled>Add to cart</button>
                        }
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default List