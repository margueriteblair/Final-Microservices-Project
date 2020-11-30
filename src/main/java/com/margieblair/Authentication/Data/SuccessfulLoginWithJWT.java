package com.margieblair.Authentication.Data;

public class SuccessfulLoginWithJWT {
    private String jwtToken;
    private boolean loggedInSuccess;

    public SuccessfulLoginWithJWT(boolean loggedInSuccess, String jwtToken) {
        this.loggedInSuccess = loggedInSuccess;
        this.jwtToken = jwtToken;
    }

    public boolean isSuccessful() {
        return loggedInSuccess;
    }

    @Override
    public String toString() {
        return "Log in successful? " + isSuccessful() + " with token " + jwtToken;
    }
}
