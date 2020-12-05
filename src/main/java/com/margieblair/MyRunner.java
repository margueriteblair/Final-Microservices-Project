package com.margieblair;

import com.margieblair.model.User;
import com.margieblair.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MyRunner implements CommandLineRunner {
    private static final Logger logger = LoggerFactory.getLogger(MyRunner.class
    );

    @Autowired
    private UserRepository repository;

    @Override
    public void run(String... args) throws Exception {
        repository.deleteAll();

        repository.save(new User("Margie", "Blair", "margieblair@gmail.com", "password"));
        repository.save(new User("Hello", "World", "careerdevs@gmail.com", "password"));

        repository.findAll().forEach((user) -> {
            logger.info("{}", user);
        });

    }
}
