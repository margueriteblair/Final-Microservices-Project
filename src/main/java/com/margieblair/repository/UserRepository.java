package com.margieblair.repository;

import com.margieblair.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "users", path="users")
public interface UserRepository extends MongoRepository<User, String> {
    //MongoDB id by default is a string, that's why String is the second value
    public List<User> findByFirstName(String firstName);
    public List<User> findByLastName(String lastName);
    public User findByEmail(String email);
    //At runtime, the Spring Data REST automatically creates an implementation of this interface. Then
    //it uses the @RepositoryRestResource annotation to direct Spring MVC to create RESTFul endpoints at '/users/
}
