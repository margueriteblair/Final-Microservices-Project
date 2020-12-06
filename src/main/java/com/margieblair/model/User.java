package com.margieblair.model;


import com.margieblair.service.SequenceGeneratorService;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter

@Document(collection="microservices-users")
public class User {

    private SequenceGeneratorService sequenceGenerator;

    @Transient
    public static final String SEQUENCE_NAME = "users_sequence";

    @Id
    private long id;
    private String firstName;
    private String lastName;
    private String password;
    private String email;

    public User() {}

    public User(long id, String firstName, String lastName, String email, String password) {
        this.id = sequenceGenerator.generateSequence(User.SEQUENCE_NAME);
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }


    public String getEmail() {
        return email;
    }
    }

