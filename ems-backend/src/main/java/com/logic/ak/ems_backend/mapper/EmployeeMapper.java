package com.logic.ak.ems_backend.mapper;

import com.logic.ak.ems_backend.dto.EmployeeDto;
import com.logic.ak.ems_backend.entity.Employee;

public class EmployeeMapper
{
    public static EmployeeDto maptoEmployeeDto(Employee emp){
        return new EmployeeDto(emp.getId(), emp.getFirstName(), emp.getLastName(), emp.getEmail());
    }
    public static Employee maptoEmployee(EmployeeDto empd){
        return new Employee(empd.getId(), empd.getFirstName(), empd.getLastName(), empd.getEmail());
    }
}
