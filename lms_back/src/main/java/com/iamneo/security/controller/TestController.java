package com.iamneo.security.controller;
import java.util.Map;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Question;
import com.iamneo.security.repository.QuestionRepository;
@CrossOrigin("*")
@RestController
public class TestController {
    private final QuestionRepository questionRepository;

    @Autowired
    public TestController(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @PostMapping("/api/evaluate")
    public TestResult evaluateTest(@RequestBody Map<Integer, String> answers) {
        List<Question> questions = questionRepository.findAll();
        int totalQuestions = questions.size();
        int correctAnswers = 0;

        for (Map.Entry<Integer, String> entry : answers.entrySet()) {
            int questionIndex = entry.getKey();
            String selectedAnswer = entry.getValue();

            if (questionIndex >= 0 && questionIndex < totalQuestions) {
                Question question = questions.get(questionIndex);
                if (selectedAnswer.equals(question.getCorrectAnswer())) {
                    correctAnswers++;
                }
            }
        }

        double score = (double) correctAnswers / totalQuestions * 100;

        return new TestResult(score);
    }

    private static class TestResult {
        private double score;

        public TestResult(double score) {
            this.score = score;
        }

        public double getScore() {
            return score;
        }
    }
}
