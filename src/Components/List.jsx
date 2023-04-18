import React from 'react'

function List({item ,index,setIndex}) {
    return (
    <div className='d-flex flex-wrap gap-2 mx-3 mt-3 mb-auto w-75'>
        {item && item.map((row,i) => (
            <div className="card h-50">
                <div className="card-body">
                    <h5 className="card-title">{row?.food_item_name}</h5>
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        ))}
        
    </div>
  )
}

export default List