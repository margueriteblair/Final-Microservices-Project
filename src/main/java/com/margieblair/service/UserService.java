package com.margieblair.service;

import com.margieblair.model.User;
import com.margieblair.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository database;

    public List<User> findAll() {
        return database.findAll();
    }
}
