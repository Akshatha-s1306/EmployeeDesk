import React,{useEffect, useState} from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmpolyeeService'
 import { useNavigate, useParams } from 'react-router-dom'
const EmployeeComponent=()=> {
  
    const [firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[email,setEmail]=useState('')

    const{id}=useParams();

    const navigator=useNavigate();

    useEffect(()=>{

        if(id){
            getEmployee(id).then((res)=>{
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setEmail(res.data.email);
            }).catch(error=>{
                console.error(error);

            })
            
        }

    },[id])
    const[errors,setErrors]=useState({
        firstName:'',
        lastName:'',
        email:''

    })
    /*const handleFirstName=(e)=>setFirstName(e.target.value);
    const handleLastName=(e)=>setLastName(e.target.value);
    const handleEmail=(e)=>setEmail(e.target.value);*/
    
    // function handleFirstName(e){
    //     setFirstName(e.target.value)
    // }
    // function handleLastName(e){
    //     setLastName(e.target.value)
    // }
    // function handleEmail(e){
    //     setEmail(e.target.value) onChange={handlename}
    // }
    function saveOrUpdateEmployee(e)
    {
        e.preventDefault();

        if(validateForm())
        {
            const employee={firstName,lastName,email}
        console.log(employee);

        if(id){
            updateEmployee(id,employee).then((res)=>{
                console.log(res.data);
                navigator('/employee')
            }).catch(error=>{
                console.error(error);
            })
        }else{
            createEmployee(employee).then((res)=>{
            console.log(res.data);
            navigator('/employee')
        }).catch(error=>{
                console.error(error);
            })

        }
        }

        
    }
    function validateForm(){
        let valid=true;
        const errorCopy={...errors}
        if(firstName.trim()){
            errorCopy.firstName='';
        }
        else{
            errorCopy.firstName='firstName is required';
            valid=false;
        }
        if(lastName.trim()){
            errorCopy.lastName='';
        }
        else{
            errorCopy.lastName='lastName is required';
            valid=false;
        }
        if(email.trim()){
            errorCopy.email='';
        }
        else{
            errorCopy.email='email is required';
            valid=false;
        }
        setErrors(errorCopy);
        return valid;

    }
    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }
        else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }
    return (
    <div>
        <div className='container'>
            <br></br>
            <br></br>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {/* <h2 className='text-center'>Add Employee</h2> */}
                    {
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='from-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input type='text' placeholder='Enter your employee first name ' 
                                name='firstName' value={firstName}
                                className={`form-control  ${errors.firstName ? 'is-invalid' :''}`}
                                onChange={(e)=>setFirstName(e.target.value)}>

                                </input>
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>
                             <div className='from-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input type='text' placeholder='Enter your employee last name ' 
                                name='lastName' value={lastName}
                                className={`form-control  ${errors.lastName ? 'is-invalid' :''}`}
                                onChange={(e)=>setLastName(e.target.value)}></input>
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>
                            <div className='from-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input type='text' placeholder='Enter employee your email' 
                                name='email' value={email}
                                className={`form-control  ${errors.email ? 'is-invalid' :''}`}
                                onChange={(e)=>setEmail(e.target.value)}></input>
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>
                        <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>   
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent