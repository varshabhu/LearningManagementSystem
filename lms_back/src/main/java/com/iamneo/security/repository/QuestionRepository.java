package com.iamneo.security.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    // Custom queries if needed
}
