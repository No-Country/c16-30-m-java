package com.giveit.app.security.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter @Setter
@AllArgsConstructor
public class AuthRequestDto {

    private String email;

    private String password;

}
