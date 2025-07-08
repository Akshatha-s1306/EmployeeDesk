package com.logic.ak.ems_backend.controller;

import com.logic.ak.ems_backend.dto.EmployeeDto;
import com.logic.ak.ems_backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4001")
@RestController
@RequestMapping("/api/employees")
@AllArgsConstructor
public class EmployeeController
{
    private EmployeeService employeeService;

    //building add emp REST API
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto empd)
    {
        EmployeeDto savedEmployee=employeeService.createEmployee(empd);
        return  new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long empid){
        EmployeeDto empd=employeeService.getEmployeeId(empid);
        return new ResponseEntity<>(empd,HttpStatus.OK);
    }

    //buliding get all employees
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
        List<EmployeeDto> emps=employeeService.getAllEmployees();
        return new ResponseEntity<>(emps,HttpStatus.OK);
    }

    //buliding update employee restAPI
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long empid,@RequestBody EmployeeDto uemp){
        EmployeeDto empd=employeeService.updateEmployee(empid,uemp);
        return new ResponseEntity<>(empd,HttpStatus.OK);
    }

    //build delete employee
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long empid){
        employeeService.deleteEmployee(empid);
        return ResponseEntity.ok("Employee deleted Successfully!!");

    }
}
