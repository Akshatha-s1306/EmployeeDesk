package com.logic.ak.ems_backend.service;

import com.logic.ak.ems_backend.dto.EmployeeDto;
import com.logic.ak.ems_backend.entity.Employee;
import com.logic.ak.ems_backend.exception.ResouceNotFoundExeption;
import com.logic.ak.ems_backend.mapper.EmployeeMapper;
import com.logic.ak.ems_backend.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public  class EmployeeServiceImpl implements EmployeeService
{
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto getEmployeeId(long empid) {
        Employee emp = employeeRepository.findById(empid)
                .orElseThrow(() -> new ResouceNotFoundExeption("Employee not found " + empid));
        return EmployeeMapper.maptoEmployeeDto(emp);
    }

    @Override
    public EmployeeDto createEmployee(EmployeeDto empd){
        Employee e= EmployeeMapper.maptoEmployee(empd);
        Employee createEmployee=employeeRepository.save(e);
        return  EmployeeMapper.maptoEmployeeDto(createEmployee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees(){
        List<Employee> emp=employeeRepository.findAll();
        return emp.stream().map((emps)->EmployeeMapper.maptoEmployeeDto(emps)).collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long empid, EmployeeDto upemp) {
        Employee emp=employeeRepository.findById(empid).orElseThrow(()->new ResouceNotFoundExeption("Employee does not exist with thw id "+empid));
        emp.setFirstName(upemp.getFirstName());
        emp.setLastName(upemp.getLastName());
        emp.setEmail(upemp.getEmail());
        Employee updateEmployee=employeeRepository.save(emp);
        return EmployeeMapper.maptoEmployeeDto(updateEmployee);
    }

    @Override
    public void deleteEmployee(Long empid) {
        Employee emp = employeeRepository.findById(empid)
                .orElseThrow(() -> new ResouceNotFoundExeption("Employee not found " + empid));
        employeeRepository.deleteById(empid);
    }
}
