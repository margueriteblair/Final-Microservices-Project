package com.margieblair.Authentication.Controllers;

import com.margieblair.Authentication.Data.Login;
import com.margieblair.Authentication.Data.SuccessfulLoginWithJWT;
import com.margieblair.Authentication.Model.User;
import com.margieblair.Authentication.Security.JWToken;
import com.margieblair.Authentication.Services.ErrorReturningService;
import com.margieblair.Authentication.Services.UserService;
import com.margieblair.Authentication.Services.ValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

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
    @Autowired
    private Environment env;


    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result) {
        userValidationService.validate(user, result);

        ResponseEntity<?> errorMap = errorService.ErrorReturningService(result);
        if (errorMap != null) {
            return errorMap;
        }
        User newUser = userService.saveUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @PutMapping("/login")
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
        String TOKEN_PREFIX = env.getProperty("jwt.prefix");
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX + jwtTokenCreator.createJWT(authentication);
        return ResponseEntity.ok(new SuccessfulLoginWithJWT(true, jwt));
    }

    @GetMapping("/validateToken")
    public ResponseEntity<Boolean> validateToken(HttpServletRequest servletRequest, HttpServletResponse servletResponse) {
        String jwt = getJWTFromRequest(servletRequest);
        return ResponseEntity.ok(StringUtils.hasText(jwt) && jwtTokenCreator.validateToken(jwt));
    }

    private String getJWTFromRequest (HttpServletRequest servletRequest) {
        String HEADER_STRING = env.getProperty("jwt.header");
        String TOKEN_PREFIX = env.getProperty("jwt.prefix");
        String bearerToken = servletRequest.getHeader(HEADER_STRING);
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith(TOKEN_PREFIX)) {
            return bearerToken.substring((7));
        }
        return null;
    }
}
