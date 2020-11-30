package com.margieblair.Authentication.Model;

import org.bson.Document;
import org.bson.codecs.pojo.annotations.BsonId;
import org.bson.codecs.pojo.annotations.BsonIgnore;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;

import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.List;

@Entity
public class User {
    public static final int MIN_USERNAME_LENGTH = 3;
    public static final int MAX_USERNAME_LENGTH = 50;
    public static final int MIN_PASSWORD_LENGTH = 7;
    public static final int MIN_EMAIL_LENGTH = 6;
    public static final int MAX_EMAIL_LENGTH = 50;

    @BsonId
    public ObjectId id;
    @BsonProperty(value = "username")
    public String username;
    @BsonProperty(value = "email")
    public String email;
    @BsonProperty(value = "password")
    public String password;

    public User() {}

    public User(String username, String email, String password) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    @BsonIgnore
    public Document getDocument(boolean includeId) {
        Document doc = new Document();

        if (username != null)
            doc.append("username", username);
        if (email != null)
            doc.append("email", email);
        if (password != null)
            doc.append("password", password);

        if (includeId) doc.append("id", id);
        return doc;
    }

    public List<String> userVerification() {
        List<String> errorsList = new ArrayList<>();
        if (username == null) {
            errorsList.add("You must have a username");
        } else if (username.length() < MIN_USERNAME_LENGTH) {
            errorsList.add("Username is too short.");
        } else if (username.length() > MAX_USERNAME_LENGTH) {
            errorsList.add("Username is too long");
        }
        if (password == null) {
            errorsList.add("You must have a password");
        } else if (password.length() < MIN_PASSWORD_LENGTH) {
            errorsList.add("Password must be greater than 7 characters.");
        }
        if (email == null) {
            errorsList.add("You must have an email");
        } else if (email.length() < MIN_EMAIL_LENGTH) {
            errorsList.add("Email must be greater than 6 characters.");
        } else if (email.length() > MAX_EMAIL_LENGTH) {
            errorsList.add("Email cannot be greater than 50 characters");
        }

        return errorsList;
    }



}
