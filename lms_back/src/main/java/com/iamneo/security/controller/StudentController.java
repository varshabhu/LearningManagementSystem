package com.iamneo.security.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Student;
import com.iamneo.security.service.ApiService;

@RestController
@CrossOrigin(origins="*")

public class StudentController {
    @Autowired
    private ApiService apiService;
    @GetMapping("/")
    public List<Student> getAllStudents() {
        return apiService.getAllStudents();
    }
    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Integer id) {
        return apiService.getStudentById(id);
    }
    @PostMapping("/course")
    public boolean createStudent(@RequestBody Student student) {
        return apiService.createStudent(student);
    }
//   
    @DeleteMapping("/{id}")
    public boolean deleteStudent(@PathVariable Integer id) {
       return apiService.deleteStudent(id);
    }
}