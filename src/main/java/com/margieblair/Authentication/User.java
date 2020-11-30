package com.margieblair.Authentication;

import org.bson.codecs.pojo.annotations.BsonId;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;

public class User {
    public static final int MIN_USERNAME_LENGTH = 3;
    public static final int MAX_USERNAME_LENGTH = 50;
    public static final int MIN_PASSWORD_LENGTH = 7;
    public static final int MIN_EMAIL_LENGTH = 6;
    public static final int MAX_EMAIL_LENGTH = 50;

    @BsonId
    public ObjectId id;
    @BsonProperty(value = "name")
    public String name;
    @BsonProperty(value = "email")
    public String email;
    @BsonProperty(value = "password")
    public String password;

    public User() {}

    public User(String name, String email, String password) {
        this.name = name;
        this.password = password;
        this.email = email;
    }



}
