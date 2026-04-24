package pf_backend.Util;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import pf_backend.Repository.UsersRepository;

import java.io.IOException;
import java.lang.reflect.InaccessibleObjectException;

@Component
public class AuthFilter extends OncePerRequestFilter {
    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private UsersRepository userRepo;

    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain) throws ServletException, IOException {
        // skip auth for registering a new user
        String path = req.getServletPath();
        if (path.startsWith("/auth/**")) {
            chain.doFilter(req, res);
            return;
        }

        String jwt = null;
        String username = null;

        // if cookies are not null extract the token to extract the user's email for authentication
        if (req.getCookies() != null) {
            for (Cookie c : req.getCookies()) {
                if (c.getName().equals("jwt")) {
                    jwt = c.getValue();
                    username = jwtUtil.extractEmail(jwt);
                }
            }
        }

        // check if user is not already part of the security context
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            // extract user details
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            // if token is valid, authenticate user and add to security context
            if (jwtUtil.isTokenValid(jwt, userDetails)) {
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                );
                auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(req));
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }
        chain.doFilter(req, res);
    }
}
