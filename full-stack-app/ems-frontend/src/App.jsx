import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import HeaderComponent from './Component/HeaderComponent'
import FooterComponent from './Component/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeComponent from './Component/EmployeeComponent'
function App() {
  
  return (
    <>
    <BrowserRouter> 
      
      <HeaderComponent/>
      <Routes>
        {/* //http://localhost:4000 */}
         <Route path='/' element={<ListEmployeeComponent/>}></Route>
        {/* //http://localhost:4000/employees */}
        <Route path='/employee' element={<ListEmployeeComponent/>}>
        </Route>
        {/* //http://localhost:4000/add-employee */}
        <Route path="/add-employee" element={<EmployeeComponent/>}></Route>
        {/*// http://localhost:4000/update-employee/1 */}
        <Route path="/update-employee/:id" element={<EmployeeComponent/>}/>

      </Routes>
      <FooterComponent/>
     
     </BrowserRouter> 
    </>
  )
}

export default App
