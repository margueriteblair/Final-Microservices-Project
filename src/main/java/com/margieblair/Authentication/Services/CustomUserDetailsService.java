package com.margieblair.Authentication.Services;

import com.margieblair.Authentication.Model.User;
import com.margieblair.Authentication.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import javax.transaction.Transactional;

public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Override public UserDetails loadUserByUsername(String email) throws Exception {
        User user = userRepository.findUserByEmail(email);
        if (user == null) {
            throw new Exception("User not found");
        }
        return user;
    }

    @Transactional
    public User loadUserById(int id) throws Exception {
        User user = userRepository.getById(id);
        if (user == null) {
            throw new Exception("User not found");
        }
        return user;
    }

}
