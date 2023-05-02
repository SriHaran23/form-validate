import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import './style.css'
import Pagination from './pagination'
import { ThemeContext } from './Dasboard';
import Loader from '../../Components/pagination/Loader';

function Page() {
    const [details,setDetails]= useState([])
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(()=>{
        getData()
    },[])
    const getData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((res)=>{
            console.log("narsimha",res.data);
            setDetails(res.data)
            settoggle(false)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = details?.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(details.length / recordsPerPage);

    const [toggle, settoggle] = useState(true)

    const handleSearch = event => {
        setSearchTerm(event.target.value);
      };
    
    const filteredData = currentRecords.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const themes = useContext(ThemeContext);
    const {theme,settheme}=themes
    const textcolour = useContext(ThemeContext);
    const {text, setText}=textcolour
    return (
        <div className={`container py-4 ${theme?"bg-light":"bg-dark"} `}>
            <div className="">
                <input class="nosubmit w-25 float-end my-1" value={searchTerm} onChange={handleSearch} type="search" placeholder="Search..."/>
            </div>
            {toggle ?<Loader/> :
            <table className={`table table-bordered mt-3 ${text?"text-black":"text-light"} `}>
                <thead>
                    <tr className='text-center'>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.map((row, i) => {
                            return <tr key={i}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.email}</td>
                                <td>{row.body}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            }
            <div className="">
                <Pagination nPages={nPages} details={details} recordsPerPage={recordsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/> 
                {/* <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={data.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                /> */}
            </div>
        </div>
    )
}

export default Page