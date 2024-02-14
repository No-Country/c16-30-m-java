package com.giveit.app.dto.response;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class UserResponseDto {

    private Long id;

    private String name;

    private String dni;

    private String email;

    private String password;

    private String country;

    private String region;

    private String city;

    private String location;
}
