import React from 'react'
import {navitems} from './Info'
import Sidenav from './Sidenav'
import List from './List'
import { useState } from 'react'
import Cart from './Cart'
import './style.css';


function Dashboard() {
    const [index,setIndex]=useState(0)
    const[itemindex,setItemindex]=useState()
    let items=navitems?.catogories
    let item=items[index]?.food_item
    let cartitem=item[itemindex]
    // console.log(cartitem)
    
  return (
    <div>
        <div className='d-flex gap-3'>
            <div className='sidenav'><Sidenav items={items} index={index} setIndex={setIndex} setItemindex={setItemindex}></Sidenav></div>
            <div className='list'><List item={item} itemindex={itemindex} setItemindex={setItemindex}></List></div> 
            <div className='cart'><Cart cartitem={cartitem} itemindex={itemindex}></Cart></div>
        </div>
    </div>
  )
}

export default Dashboard