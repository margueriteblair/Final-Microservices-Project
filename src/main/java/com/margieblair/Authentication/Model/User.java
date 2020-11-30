package com.margieblair.Authentication.Model;

import com.sun.istack.NotNull;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;


import javax.persistence.*;
import java.util.Date;

@Entity
public class User implements UserDetails {
    public static final int MIN_USERNAME_LENGTH = 3;
    public static final int MAX_USERNAME_LENGTH = 50;
    public static final int MIN_PASSWORD_LENGTH = 7;
    public static final int MIN_EMAIL_LENGTH = 6;
    public static final int MAX_EMAIL_LENGTH = 50;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotNull
    private String firstName;
    @NotNull
    private String lastName;
    @Email(message = "Please provide a valid email.")
    @NotBlank(message = "Email is required")
    @Column(unique = true)
    private String email;

    @NotBlank(message = "A unique username is required")
    @Column(unique = true)
    private String username;

    @NotBlank(message = "A password is required")
    private String password;

    @Transient
    private String confirmPassword;

    private Date createdOn;
    private Date updatedOn;

    public User() {}

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public String getFullName() {
        return firstName + " " + lastName;
    }
    public String getEmail() {
        return email;
    }
    public String getUsername() {
        return username;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    @PreUpdate
    public void updateDate() {
        this.updatedOn = new Date();
    }

    @PrePersist
    public void createDate() {
        this.createdOn = new Date();
    }




}
