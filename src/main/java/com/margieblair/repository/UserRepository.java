package com.margieblair.repository;

import com.margieblair.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {
    public List<User> findByFirstName(String firstName);
    public List<User> findByLastName(String lastName);
    public User findByEmail(String email);
}
