import React from 'react'
import {navitems} from './Info'
import Sidenav from './Sidenav'
import List from './List'
import { useState } from 'react'

function Dashboard() {
    const [index,setIndex]=useState(0)
    let items=navitems?.catogories
    let item=items[index]?.food_item
    // console.log(items)
    console.log(item)
    console.log(index)
  return (
    <div>
        <div className='d-flex'>
            <Sidenav items={items} index={index} setIndex={setIndex}></Sidenav>
            <List item={item} index={index} setIndex={setIndex}></List>
        </div>
    </div>
  )
}

export default Dashboard