import React, { useEffect, useState } from 'react'
//import React,{useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmpolyeeService'
import { useNavigate } from 'react-router-dom'
const ListEmployeeComponent=()=> {
   
    const [employees,setEmployee]=useState([])
    const navigator=useNavigate();
    useEffect (()=>{
        getAllEmployees();
    },[])
    function getAllEmployees(){
        listEmployees().then((response)=>{
            setEmployee(response.data);
        }).catch(error=>{
            console.error(error);
        })
    }
    
    function addNewEmployee(){
        navigator('/add-employee')
    }
    function updateEmployee(id){
        navigator(`/update-employee/${id}`)
    }
    function removeEmployee(id)
    {
        console.log(id);
        deleteEmployee(id).then((res)=>{
              getAllEmployees();
        }).catch(error=>{
            console.error(error);
        })
    }

    return (
    <div className='container'>
        <h2>
            List Of Employees : 
        </h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>EmpID</th>
                    <th>EmpFirstName</th>
                    <th>EmpLastName</th>
                    <th>EmpEmail</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(emp=>
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={()=>updateEmployee(emp.id)}>Update</button>
                                <button className='btn btn-danger' onClick={()=>removeEmployee(emp.id)} style={{marginLeft:'10px'}}>
                                    Delete</button>
                            </td>


                        </tr>
                        
                   )
                    
                }
            </tbody>
        </table>
    </div>
  )
    
    // const dumData=[
    //     {
    //         "id":1,
    //         "fristName":"Adam",
    //         "lastName":"Paul",
    //         "email":"pauladam@mail.com"

    //     },
    //     {  "id":2,
    //         "fristName":"Eve",
    //         "lastName":"Luke",
    //         "email":"Evelukem@mail.com"
    //     },
    //     {
    //          "id":3,
    //         "fristName":"John",
    //         "lastName":"Roulie",
    //         "email":"rouliejohn@mail.com"
    //     }
    // ]
  
}

export default ListEmployeeComponent