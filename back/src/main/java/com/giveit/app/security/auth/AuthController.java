package com.giveit.app.security.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

import static com.giveit.app.exceptions.config.ResponseBuilder.responseBuilder;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService service;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequestDto data){
        return responseBuilder(HttpStatus.OK, service.register(data));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequestDto data){
        return responseBuilder(HttpStatus.OK, service.logIn(data));
    }

    @PutMapping("logout/{sessionId}")
    public ResponseEntity<?> logout(@PathVariable("sessionId") UUID sessionId){
        service.logOut(sessionId);
        return responseBuilder(HttpStatus.OK, "Deleted");
    }

}
