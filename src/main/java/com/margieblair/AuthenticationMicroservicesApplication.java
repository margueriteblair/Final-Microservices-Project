package com.margieblair;

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


	}
