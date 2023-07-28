package com.iamneo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Enroll;
import com.iamneo.security.repository.EnrollRepository;


@Service
public class EnrollService {
@Autowired
private  EnrollRepository Enrollrepo;

public List<Enroll> getAll() {
return Enrollrepo.findAll();

}
public Enroll getEnrollById(Long id) {
return Enrollrepo.findById(id).get();
}
public boolean createEnroll(Enroll Enroll) {
return Enrollrepo.save(Enroll) != null? true:false;
}
public Enroll updateEnroll(Long id, Enroll Enroll) {

return Enrollrepo.saveAndFlush(Enroll);
}
public void deleteEnroll(Long id) {

	Enrollrepo.deleteById(id);
}

}

