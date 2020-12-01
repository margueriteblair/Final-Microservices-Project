package com.margieblair.Authentication.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dashboard")
public class LoggedInController {

    @GetMapping
    public String greetings() {
        return "Welcome! You've successfully logged in";
    }
}
