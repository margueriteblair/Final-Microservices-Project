package com.margieblair.Authentication.Services;

import com.margieblair.Authentication.Model.User;
import com.margieblair.Authentication.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder bcrypt;

    public User saveUser(User newUser) {
        try {
            newUser.setPassword(bcrypt.encode(newUser.getPassword()));
            newUser.setConfirmPassword("");
            return userRepository.save(newUser);
        } catch (Exception ex) {
            throw new IllegalArgumentException("That username already exists.");
        }
    }
}
