package com.logic.ak.ems_backend.service;

import com.logic.ak.ems_backend.dto.EmployeeDto;
import org.springframework.stereotype.Service;

import java.util.List;

//@Service
public interface EmployeeService
{
    EmployeeDto createEmployee(EmployeeDto empd);

    EmployeeDto getEmployeeId(long empid);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long empid,EmployeeDto upemp);

    void deleteEmployee(Long empid);

}
