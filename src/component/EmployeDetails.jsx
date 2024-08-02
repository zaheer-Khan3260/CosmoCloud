import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CgArrowLeftR } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';


function EmployeDetails() {
    const [employeeData, setEmployeeData] = useState({})
    const navigate = useNavigate();
    const customHeader = {
        projectId: "66aa8786f0b1983e001ffdb5",
        environmentId: "66aa8786f0b1983e001ffdb6"
       }
       const {_id} = useParams()
       useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get('/development/api/employe', {
            params: {
              limit : 10,
              offset: 0
            },
            headers: customHeader,
          },
        )
        const data = response.data.data
        data.map((employess) => {
          if (employess._id === _id) {
            setEmployeeData(employess)
          }
        })
      
      }
    
        fetchData()
      }, [])
      

  return (
    <div className='w-full h-screen bg-white flex justify-center items-center '>
    <div 
    className='bg-white h-[15rem] p-8 pt-0 rounded-lg shadow-xl shadow-slate-500 w-full max-w-lg relative '
    >
      <CgArrowLeftR className='text-xl mb-4' onClick={() => navigate("/")}/>
    <p className='mb-3 pt-5 font-semibold'>Employee Id : {employeeData._id} </p>
    <p className='mb-3 font-semibold'>Name : {employeeData.name} </p>
    <p className='mb-3 w-full font-semibold'>Address : {employeeData.address}</p>
    <p className='mb-3 font-semibold'>{employeeData.contact_method} : {employeeData.value}</p>
    </div>
    </div>
  )
}

export default EmployeDetails
