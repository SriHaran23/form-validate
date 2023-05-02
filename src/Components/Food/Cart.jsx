import React, { useState, useEffect } from 'react'

function Cart({cartitem,status,setStatus}) {
    const[cartlist,setcartlist]=useState([])
    useEffect(()=>{
        // console.log(cartlist)
        var filtered = cartlist.filter(function(x) {
            return x !== undefined;
        });
        if(cartitem!==undefined){
            let res =[...filtered,cartitem]
            setcartlist(res)
            localStorage.setItem("array",JSON.stringify(res))           
        }
        getlist()
      },[cartitem])

      const getlist=()=>{
        const str = localStorage.getItem("array")
        if(str){
            setcartlist(JSON.parse(str))
        }
      }

      const incNum = (i) => {
        cartlist[i].quantity=cartlist[i]?.quantity+1;
        let res = [...cartlist]
        setcartlist(res)
        localStorage.setItem("array",JSON.stringify(res))
      };
      let decNum = (i) => {
        cartlist[i].quantity=cartlist[i]?.quantity-1;
        setcartlist([...cartlist])
        if(cartlist[i].quantity===0){
            const temp= [...cartlist];
            temp.splice(i,1);
            let res =[...temp]
            setcartlist(res)
            localStorage.setItem("array",JSON.stringify(res))
        }
        setStatus(status-1)
      }
  return (
    <div className='border border-2 my-3 me-3 p-3 h-100'>
        <ul className='scroll'>
            <h1 className='text-center'>Cart</h1>
            {cartlist && cartlist.map((li,i)=>{
            return <li key={i}>
                <span className="d-flex justify-content-around">
                    <div className='w-75'>{li?.food_item_name}</div>
                    <div>{(li?.food_item_price*li?.quantity).toFixed(2)+"$"}</div>
                </span>
                <div className="d-flex justify-content-center gap-2">
                    <div><button type="button" className='btn btn-outline-danger  btn-sm border-3 px-2' onClick={() => {decNum(i)}}>-</button></div>
                    <div className='align-item-center mt-1'>{li?.quantity}</div>
                    <div><button type="button" className='btn btn-outline-success btn-sm border-3 px-2' onClick={() => {incNum(i)}}>+</button></div>
                </div>
            </li>
        })}
        </ul>
    </div>
  )
}

export default Cart