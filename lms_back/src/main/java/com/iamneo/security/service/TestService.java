package com.iamneo.security.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Question;
import com.iamneo.security.repository.QuestionRepository;

@Service
public class TestService {
    private final QuestionRepository questionRepository;

    @Autowired
    public TestService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }
}
