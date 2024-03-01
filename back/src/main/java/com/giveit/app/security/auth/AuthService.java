package com.giveit.app.security.auth;

import com.giveit.app.entity.User;
import com.giveit.app.exceptions.ResourceAlreadyExistsException;
import com.giveit.app.exceptions.ResourceNotFoundException;
import com.giveit.app.mapper.GenericMapper;
import com.giveit.app.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final SessionRepository sessionRepository;

    private final UserRepository userRepository;

    private final GenericMapper mapper;

    private final PasswordEncoder passwordEncoder;

    public AuthResponseDto register (RegisterRequestDto data){
        User user = userRepository.findByEmail(data.getEmail()).orElse(null);
        if(user!=null)
            throw new ResourceAlreadyExistsException("User already exists");
        user = mapper.map(data, User.class);
        user.setPassword(passwordEncoder.encode(data.getPassword()));
        userRepository.save(user);

        Session session = new Session();
        session.setUserId(user.getId());
        sessionRepository.save(session);

        return new AuthResponseDto(session.getId());
    };

    public AuthResponseDto logIn (AuthRequestDto data){
        User user = userRepository.findByEmail(data.getEmail()).orElse(null);
        if(user==null)
            throw new ResourceNotFoundException("User already exists");

        if(!passwordEncoder.matches(data.getPassword(), user.getPassword()))
            throw new ResourceNotFoundException("User Or Password incorrect");

        Session session = new Session();
        session.setUserId(user.getId());
        sessionRepository.save(session);

        return new AuthResponseDto(session.getId());
    };

    public void logOut (UUID sessionId){
        Session session = sessionRepository.findById(sessionId).orElse(null);

        if(session==null)
            throw new ResourceNotFoundException("Session not found");

        sessionRepository.delete(session);
    };

}
