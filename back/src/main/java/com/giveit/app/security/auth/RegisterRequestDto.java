package com.giveit.app.security.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class RegisterRequestDto {

    private String email;

    private String password;

    private String name;

    private String dni;

    private String country;

    private String region;

    private String city;

    private String location;

    private String phone;

}
