package com.margieblair.Authentication;

import com.margieblair.Authentication.Model.User;

import java.util.ArrayList;
import java.util.List;

public class MockDB {
    private static List<User> usersDB = new ArrayList<>();

    public static void addUser(User user) {
        usersDB.add(user);
    }


}