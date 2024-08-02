import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function EmployeeList({
    _id,
    name = "zaheer"
}) {

  const [isVisible, setIsVisible] = useState(true)
  const customHeaders = {
    projectId: "66aa8786f0b1983e001ffdb5",
    environmentId: "66aa8786f0b1983e001ffdb6",
    _id
   }
   const deleteList = async() => {
    try {
      const response = await axios.delete(`/development/api/employe/${_id}`, {
        headers: customHeaders
      });
      console.log("Response:", response.data); // Log the response data
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data); // Log the response error data
        console.error("Error response status:", error.response.status); // Log the response error status
      } else {
        console.error("Error message:", error.message); // Log the general error message
      }
    }
  };

  return (
    <div className={`h-16 justify-between ${isVisible ? "flex" : "hidden"}`}>
        <div className='flex w-full border-b-2 border-black'>
      <div className='w-1/2 text-center text-[18px] pt-3'>
        {_id}
      </div>
      <div className='w-1/3 text-center text-[20px] pt-3'>
        {name}
      </div>
      </div>
      <div className='flex border-b-2 border-black'>
        <Link to={`/employee-details/${_id}`}>
        <button className='w-20 h-8 bg-green-500 rounded-lg text-white text-xl mt-4 mr-2 '>
            View
        </button>
        </Link>
        <button className='w-20 h-8 bg-red-500 rounded-lg text-white text-xl mt-4 mr-2 '
        onClick={() => {
          deleteList()
          setIsVisible(false)
        }
  
        }
        >
            Delete
        </button>
      </div>
    </div>
  )
}


