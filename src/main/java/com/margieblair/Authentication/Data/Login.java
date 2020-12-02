package com.margieblair.Authentication.Data;

import javax.validation.constraints.NotBlank;

public class Login {

    @NotBlank(message = "Please provide a valid username.")
    private String username;

    @NotBlank(message = "Please provide a valid password")
    private String password;

    public String getPassword() {
        return password;
    }

    public String getUsername() {
        return username;
    }
}
