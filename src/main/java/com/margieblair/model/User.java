package com.margieblair.model;


import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter

@Document(collection="")
public class User {
    @Id
    private long id;
    private String firstName;
    private String lastName;
    private String password;
    private String email;

    public User() {}

    public User(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }


    public String getEmail() {
        return email;
    }
    }

