package com.margieblair.Authentication.Repository;

import com.margieblair.Authentication.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findUserByName(String fullName);
    User findUserById(Integer id);
}
