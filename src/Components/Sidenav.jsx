import React from 'react'

function Sidenav({items,index,setIndex}) {
    const add=(i)=>{
        setIndex(i)
        console.log(index)
    }
    console.log(index)
  return (
    <div>
        <aside className="bd-sidebar bd-expand-lg bg-body-tertiary border border-end">      
            <div className="offcanvas-body ">
                <nav className="bd-links " id="bd-docs-nav" aria-label="Docs navigation">
                    <ul className="bd-links-nav text-dark-subtle list-unstyled mx-3 pb-3 pb-md-2 pe-lg-2">
                        <li className="bd-links-group py-2">
                            <strong className="bd-links-heading  d-flex w-100 align-items-center" id="ui">
                                Catogories
                            </strong>
                            <ul className="li list-unstyled fw-normal mx-2 pb-2 small">
                                {items && items.map((row,i) => (
                                    <li className=' d-flex my-3'>
                                        <div id="com">
                                            {index===i?<button onClick={()=>{add(i)}} className='btn btn-primary'>{row?.category_name}</button>:<button onClick={()=>{add(i)}} className='btn btn-outline-primary'>{row?.category_name}</button>}
                                            
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    </div>
  )
}

export default Sidenav