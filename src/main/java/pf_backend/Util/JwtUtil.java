package pf_backend.Util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.UUID;

@Component
public class JwtUtil {
    @Value("${JWT_SECRET}")
    private String key;

    // create jwt token
    public String createToken(UUID userId, String email) {
        return Jwts.builder()
                .setSubject(String.valueOf(userId))
                .claim("email", email)
                .setIssuer("pf-api")
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + (1000 * 60 * 60 * 24 * 7)))
                .signWith(Keys.hmacShaKeyFor(key.getBytes(StandardCharsets.UTF_8)))
                .compact();
    }

    // extract user id from token payload
    public UUID extractUserId(String token) {
        Claims claims = Jwts.parserBuilder()
                .build()
                .parseClaimsJws(token)
                .getBody();

        return UUID.fromString(claims.getSubject());
    }

    // extract token expiration from token payload
    public Date extractExpiration(String token) {
        Claims claims = Jwts.parserBuilder()
                .build()
                .parseClaimsJws(token)
                .getBody();

        return claims.getExpiration();
    }

    // extract email from token payload
    public String extractEmail(String token) {
        Claims claims = Jwts.parserBuilder()
                .build()
                .parseClaimsJws(token)
                .getBody();

        return claims.get("email", String.class);
    }

    // check if token is expired
    public boolean isExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    // checking if token is valid
    public boolean isTokenValid(String token, UserDetails userDetails) {
        String id = String.valueOf(extractUserId(token));
        // token is not expired and id in payload matches id of current user
        return (!isExpired(token) && id.equals(userDetails.getUsername()));
    }

    // extract token from cookie payload
    public String extractTokenFromCookie(HttpServletRequest req) {
        Cookie[] cookies = req.getCookies();
        if (cookies != null) {
            for (Cookie c : cookies) {
                if (c.getName().equals("jwt")) {
                    return c.getValue();
                }
            }
        }
        return null;
    }
}
