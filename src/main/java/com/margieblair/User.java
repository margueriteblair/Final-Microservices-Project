package com.margieblair;

public class User {
    private String email;
    private String password;
    private String username;
    private int id;

    public User(String email, String username, String password, int id) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public int getId() {
        return id;
    }
}
