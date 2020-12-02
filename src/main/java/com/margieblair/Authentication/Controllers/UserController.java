package com.margieblair.Authentication.Controllers;

import com.margieblair.Authentication.Data.Login;
import com.margieblair.Authentication.Data.SuccessfulLoginWithJWT;
import com.margieblair.Authentication.Model.User;
import com.margieblair.Authentication.Services.ErrorReturningService;
import com.margieblair.Authentication.Services.UserService;
import com.margieblair.Authentication.Services.ValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private ErrorReturningService errorService;
    @Autowired
    private UserService userService;
    @Autowired
    private ValidationService userValidationService;
    @Autowired
    private JWToken jwtTokenCreator;
    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result) {
        userValidationService.validate(user, result);

        ResponseEntity<?> errorMap = errorService.ErrorReturningService(result);
        if (errorMap != null) {
            return errorMap;
        }
        User newUser = userService.saveUser(user);
        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateLogin(@Valid @RequestBody Login loginRequest, BindingResult result) {
        ResponseEntity<?> errorMap = errorService.ErrorReturningService(result);
        if (errorMap != null) {
            return errorMap;
        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX + jwtTokenCreator.createJWT(authentication);
        return ResponseEntity.ok(new SuccessfulLoginWithJWT(true, jwt));
    }
}
