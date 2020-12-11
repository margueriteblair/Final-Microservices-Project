package com.margieblair.controller;


import com.margieblair.model.User;
import com.margieblair.service.UserService;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

import java.security.Key;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @Value("${jwt.key}")
    private String secret;

    private Key getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secret);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userService.getUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/user")
    public ResponseEntity<User> saveNewUser(@RequestBody User user) {
        String hashedPW = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        user.setPassword(hashedPW);
        User newUser = userService.saveUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @PutMapping("/user")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        User newUser = userService.updateUser(user);
        try{
            User attemptedLoginUser = userService.getUserByEmail(user.getEmail());
            return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);

    }

    @DeleteMapping("/user")
    public ResponseEntity<String> deleteStudent(@RequestParam(name="id") String id) {
        String message = userService.getUserToDelete(id);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

}
