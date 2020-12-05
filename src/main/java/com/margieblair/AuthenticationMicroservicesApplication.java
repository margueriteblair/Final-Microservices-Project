package com.margieblair;

import com.margieblair.model.User;
import com.margieblair.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AuthenticationMicroservicesApplication {

	@Autowired
	private UserRepository database;

	public static void main(String[] args) {
		SpringApplication.run(AuthenticationMicroservicesApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		database.deleteAll();
		database.save(new User("Margie", "Blair", "mblair@bostonk12.org"));
		database.save(new User("Hello", "World", "java@careerdevs.com"));

		for (User user : database.findAll()) {
			System.out.println(user);
		}
	}

	}
