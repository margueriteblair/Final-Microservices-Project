package com.margieblair.service;

import com.margieblair.model.User;
import com.margieblair.repository.UserRepository;
import com.margieblair.utils.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public User getUserById(String id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return user.get();
        }
        throw new EntityNotFoundException("Cannot find any user with the given id");
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(User newUser) {
        return userRepository.save(newUser);
    }

    public String getUserToDelete(String id) {
        userRepository.deleteById(id);
        return "User with id: " + id + " deleted";
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    
}
