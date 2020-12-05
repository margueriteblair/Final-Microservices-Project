package com.margieblair.model;


import org.springframework.data.annotation.Id;

public class User {
    private String firstName;
    private String lastName;
    @Id
    private long id;
    private String email;

    public User() {}

    public User(String firstName, String lastName, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}
