
import React, { useState } from 'react'
import Input from './Input.jsx';
import axios from 'axios';
import { CgArrowLeftR } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

export default function CreateEmployee() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    addressLine1: '',
    city: '',
    postalCode: '',
    contactMethod: 'EMAIL',
    contactValue: ''
  });

 const customHeader = {
  projectId: "66aa8786f0b1983e001ffdb5",
  environmentId: "66aa8786f0b1983e001ffdb6"
 }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/development/api/employe",{
        name:formData.name,
        address: formData.addressLine1 + "," + formData.city + "," + formData.postalCode,
        contact_method: formData.contactMethod,
        value: formData.contactValue
      },
      {
        headers: customHeader,
      }
    );
    if(response) {
      navigate("/")
      setFormData({
        name: '',
        addressLine1: '',
        city: '',
        postalCode: '',
        contactMethod: 'EMAIL',
        contactValue: ''
      });
    }
    } catch (error) {
      console.error('Error registering employee:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white/10 backdrop-blur-lg w-full">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-xl shadow-slate-500 w-full max-w-lg relative">
      <CgArrowLeftR className='text-xl' onClick={() => navigate("/")}/>
        <h2 className="text-2xl font-bold mb-4 text-center">Employee Details</h2>
        <div className="mb-4">
          <Input
          label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            ClassName="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <Input
          label= "Adrress"
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            ClassName="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className='flex w-full'>
        <div className="mb-4 w-[50%] mr-3">
          <Input
          label="City"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            ClassName="w-full"
          />
        </div>
        <div className="mb-4 w-[50%]">
          <Input
          label="Postal Code"
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            ClassName="w-full"
          />
        </div>
        </div>
        <div className='flex'>
        <div className="mb-4 mr-3">
          <label className="block text-gray-700">Contact Method</label>
          <select
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500 mt-1"
          >
            <option value="EMAIL">EMAIL</option>
            <option value="PHONE">PHONE</option>
          </select>
        </div>
        <div className="mb-4">
          <Input
            type="text"
            label="Value"
            name="contactValue"
            value={formData.contactValue}
            onChange={handleChange}
            ClassName="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          />
        </div>
        </div>
        <div className='text-end mt-8'>
        <button type="submit" className="w-24 bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
          Save
        </button>
        </div>
      </form>
    </div>
  );
}
