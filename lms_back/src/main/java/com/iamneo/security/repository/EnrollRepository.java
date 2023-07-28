package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.Enroll;

@Repository
public interface EnrollRepository  extends JpaRepository<Enroll,Long>{

}
