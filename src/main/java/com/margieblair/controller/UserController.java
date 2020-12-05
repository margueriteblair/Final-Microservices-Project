package com.margieblair.controller;


import com.margieblair.model.User;
import com.margieblair.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    @PostMapping("/newuser")
    public User createUser(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String email, @RequestParam String password) {
        return new User(firstName, lastName, email, password);
    }
}
