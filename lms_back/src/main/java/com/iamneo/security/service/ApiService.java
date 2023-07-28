package com.iamneo.security.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Enroll;
import com.iamneo.security.entity.Student;
import com.iamneo.security.repository.StudentRepository;

@Service
public class ApiService {
    @Autowired
    private StudentRepository studentRepository;
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    public Student getStudentById(Integer id) {
        return studentRepository.findById(id).get();
    }
    public boolean createStudent(Student student) {
        return studentRepository.save(student) != null? true:false;
    }
    public Student updateStudent(Long id, Student Student) {

    	return studentRepository.saveAndFlush(Student);
    	}
    	
    public boolean deleteStudent(Integer id) {
        if(studentRepository.findById(id).isPresent()){
            studentRepository.deleteById(id);
          return true;
        } 
        return false;
    }
}