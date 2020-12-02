package com.margieblair.Authentication.Security;

import com.margieblair.Authentication.Model.User;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JWToken {
    private static final int EXPIRATION_TIME_LIMIT = 5 * 60 * 60;

    @Autowired
    private Environment env;

    //    public static final String SIGN_UP_URLS = "/api/users/**";
//    public static final String TOKEN_PREFIX = "Bearer ";
//    public static final String HEADER_STRING = "Authorization";
    public String generateToken(Authentication authentication) {
        String JWT_SECRET = env.getProperty("jwt.secret");
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

    public Integer getIdFromJWT(String jwt) {
        String JWT_SECRET = env.getProperty("jwt.secret");
        Claims claims = Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(jwt).getBody();
        return Integer.parseInt((String) claims.get("id"));
    }

    public boolean validateToken(String token) {
        String JWT_SECRET = env.getProperty("jwt.secret");
        try {
            Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(token);
            return true;
        } catch (UnsupportedJwtException | SignatureException | ExpiredJwtException | IllegalArgumentException | MalformedJwtException ex) {
            ex.printStackTrace();
        }
        return false;
    }


}
