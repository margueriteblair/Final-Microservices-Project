package com.margieblair.Authentication.Services;

import com.margieblair.Authentication.Model.User;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
public class ValidationService implements Validator {
    @Override
    public boolean supports(Class<?> classComparison) {
        return User.class.equals(classComparison);
    }

    @Override
    public void validate(Object object, Errors errors) {
        User user = (User) object;
        //need to add limitations for the username and email and shit
        if (user.getPassword().length() < 6) {
            errors.rejectValue("password", "length", "Password must be at least 6 characters.");
        }
        if (!user.getPassword().equals(user.getConfirmPassword())) {
            errors.rejectValue("confirmPassword", "password", "Passwords must match");
        }
    }

}
