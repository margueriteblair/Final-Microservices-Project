package com.margieblair;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AuthenticationMicroservicesApplication {

	public static void main(String[] args) {
//		AuthenticationApplication.main(args);
//		ProcessorApplication.main(args);
		SpringApplication.run(AuthenticationMicroservicesApplication.class, args);
	}

}