package com.iamneo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Enroll;
import com.iamneo.security.service.EnrollService;

@RestController
@RequestMapping("/Enroll")
public class EnrollController {
@Autowired
private EnrollService Enrollserve;
@GetMapping("/roll")	
public List<Enroll> getAllEnroll() {

return Enrollserve.getAll();
}
@GetMapping("/roll/{id}")
public Enroll getEnrollById(@PathVariable Long id) {
return Enrollserve.getEnrollById(id);
}
@PostMapping("/addroll")
public boolean createEnroll(@RequestBody Enroll Enroll) {
return Enrollserve.createEnroll(Enroll);
}
@PutMapping("/updateroll/{id}")
public Enroll updateEnroll( @RequestBody Enroll Enroll,@PathVariable Long id) {
return Enrollserve.updateEnroll(id, Enroll);
}
@DeleteMapping("/deleteroll/{id}")
public String deleteEnroll(@PathVariable Long id) {
	Enrollserve.deleteEnroll(id);
	return "Details Deleted";
 
}
}

