package com.margieblair.service;

import com.margieblair.model.User;
import com.margieblair.repository.UserRepository;
import com.margieblair.utils.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public UserService() {
        userRepository = null;
    }

    public User getUserById(String id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return user.get();
        }
        throw new EntityNotFoundException("Cannot find any user with the given id");
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    
}
