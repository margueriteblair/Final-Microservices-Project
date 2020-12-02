package com.margieblair.Authentication.Model;


public class User {
    private String email;
    private String password;
    private int id;

    public User(String username, String password, int id) {
        this.email = username;
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
