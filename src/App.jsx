import { useEffect, useState } from "react";
import EmployeeList from "./component/EmployeeList.jsx";
import {Link} from "react-router-dom"
import axios from "axios";
import EmployeData from "./component/EmployeDetails.jsx";



export default function App() {
  const [employee, setEmployee] = useState([]);

  const customHeader = {
    projectId: "66aa8786f0b1983e001ffdb5",
    environmentId: "66aa8786f0b1983e001ffdb6"
   }

  useEffect(() => {
    const fetchEmployeeData = async () => {
      const response = await axios.get('/development/api/employe', {
        params: {
          limit : 10,
          offset: 0
        },
        headers: customHeader,
      },
    )
    if(response){
      setEmployee(response.data.data)
    }
  
  }

    fetchEmployeeData()
  }, [])

  return (
    <div className="border-2 border-red-600 w-full h-screen 
    p-9 relative
    ">
      <div className="w-[70%] mx-auto">
      <div className="w-full text-center">
        <h1 className="text-[2rem] font-bold">CosmoCloud Employes</h1>
      </div>
      {/* add employe container */}
      <div className="w-[75%] mx-auto mt-44 h-20 text-right">
        <Link to={"/create-employee"}>
         <button className="mt-4 w-28 h-11 text-center rounded-md bg-blue-500
          hover:bg-blue-600 font-semibold text-2xl text-white"
          >
          Create
         </button>
         </Link>
      </div>
      {/* EMploye list container */}
      <div className="border-2 border-b-0 rounded-md border-black h-auto w-[75%] mx-auto">
        <div className="w-full pr-44 border-b-2 border-black h-14 flex ">
            <div className="w-1/2 text-center text-2xl font-semibold pt-3">
              Employe Id
            </div>
            <div className=" w-1/3 text-center text-2xl font-semibold pt-3">
              Name
            </div>
        </div>
        {
          employee.length > 0 ? employee.map((data) => (
            <EmployeeList key={data._id} {...data} />
          )) : 
            <div className='flex w-full border-b-2 h-14 justify-center items-center text-2xl border-black'>
            No Employess In the system
            </div>
        }
      </div>

      </div>
    </div>
  );
}

