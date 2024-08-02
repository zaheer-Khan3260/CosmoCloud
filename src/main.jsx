import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import CreateEmployee from './component/CreateEmployee.jsx'
import EmployeDetails from './component/EmployeDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  }, 
  {
    path: "/create-employee",
    element: <CreateEmployee/>
  },
  {
    path: "/employee-details/:_id",
    element: <EmployeDetails/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
