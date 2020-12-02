package com.margieblair.Authentication.Security;

import com.margieblair.Authentication.Model.User;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.*;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JWToken {
    private static final int EXPIRATION_TIME_LIMIT = 500_000;
    private static final String JWT_SECRET = "dkldck4kl2laxf467sdx";
//    public static final String SIGN_UP_URLS = "/api/users/**";
//    public static final String TOKEN_PREFIX = "Bearer ";
//    public static final String HEADER_STRING = "Authorization";
    public String generateToken(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        Date now = new Date(System.currentTimeMillis());
        String userId = Integer.toString(user.getId());

        Date expiration = new Date(now.getTime() + EXPIRATION_TIME_LIMIT);
        Map<String, Object> claims = new HashMap<>();
        claims.put("id", (Integer.toString(user.getId())));
        claims.put("username", user.getUsername());
        claims.put("fullname", user.getFullName());

        String jsonWebToken = Jwts.builder()
                .setSubject(userId)
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expiration)
                .signWith(SignatureAlgorithm.ES512, JWT_SECRET)
                .compact();
        return jsonWebToken;
    }
}
