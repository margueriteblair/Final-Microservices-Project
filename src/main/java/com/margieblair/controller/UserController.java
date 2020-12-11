package com.margieblair.controller;


import com.margieblair.model.User;
import com.margieblair.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

import javax.crypto.SecretKey;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    Environment env;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userService.getUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/user")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        String hashedPW = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        user.setPassword(hashedPW);
        User newUser = userService.saveUser(user);
        System.out.println(newUser);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @PutMapping("/user")
    public String loginUser(@RequestBody User user) {
        try{
            User loginUser = userService.getUserByEmail(user.getEmail());
            String unhashedPW = user.getPassword();
            String hashedPW = loginUser.getPassword();
            boolean isMatchingCredentials = BCrypt.checkpw(unhashedPW, hashedPW);
            if (!isMatchingCredentials) {
                System.out.println("Login failed: credentials do not match!");
                return "Login failed: credentials do not match!";
            }
            //now that we know the passwords match, we can incorporate a JWT
            Instant now = Instant.now();
            Date issuedAt = Date.from(now);
            Date expiresAt = Date.from(now.plus(2, ChronoUnit.HOURS));

            SecretKey key = Keys.hmacShaKeyFor(env.getProperty("jwt.key").getBytes());

            String jwt = Jwts.builder()
                    .setSubject("jwt-auth")
                    .setIssuedAt(issuedAt)
                    .setExpiration(expiresAt)
                    .claim("id", loginUser.getId())
                    .claim("email", loginUser.getEmail())
                    .signWith(key)
                    .compact();
            return jwt;
        } catch (Exception ex) {
            ex.printStackTrace();
            return "failed";
        }

    }

    @GetMapping("/testjwt")
    public String testJWT(@RequestHeader String jwt) {
        try {
            SecretKey key = Keys.hmacShaKeyFor(env.getProperty("jwt.key").getBytes());
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt);
            return "Valid JWT";
        } catch (Exception ex) {
            ex.printStackTrace();
            return "Invalid JWT";
        }
    }

    @DeleteMapping("/user")
    public ResponseEntity<String> deleteStudent(@RequestParam(name="id") String id) {
        String message = userService.getUserToDelete(id);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

}
