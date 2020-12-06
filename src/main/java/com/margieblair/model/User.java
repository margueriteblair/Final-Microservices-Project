package com.margieblair.model;


import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Getter
@Setter

@Document(collection="microservices-users")
public class User {

    private UUID uuid;


    @Id
    private UUID id;
    private String firstName;
    private String lastName;
    private String password;
    private String email;

    public User() {
    }

    public User(UUID id, String firstName, String lastName, String email, String password) {
        this.id = UUID.randomUUID();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }


    public String getEmail() {
        return email;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }
}

