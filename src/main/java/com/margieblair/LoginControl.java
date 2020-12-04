package com.margieblair;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@SpringBootApplication
@RestController
public class LoginControl {
    //MARGIE REPLACE WITH DB
    private final ArrayList<User> users = new ArrayList<>();


    @Autowired
    public LoginControl() {

    }

    public static void main(String[] args) {
        SpringApplication.run(LoginControl.class, args);
    }

    @PostMapping
    public User registerUser(@RequestBody String username, String email, String password, int id){
        User user = new User(username, email, password, id);
        System.out.println("new user: " + username + " " + password + " "+ id);

        return user;
    }

    @GetMapping(path = "{id}")
    public User getUserById(@PathVariable("id") int id){
        System.out.println("in get" + id);
        User thisUser = users.stream().filter(
                user -> user.getId() == id
        ).findFirst().orElse(null);

        System.out.println(thisUser);

        return thisUser;
    }

    @DeleteMapping
    public User deleteUserById(int id){
        return null;
    }

    @PutMapping
    public User updateUserById(int id, User newUser){
        return newUser;
    }

}