package com.giveit.app.dto.response;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter


public class PublicationResponseDto {

    private Long Id;
    private Long userGiverId;
    private Long userId;
    private String firstName;
    private String lastName;
    private String description;
    private String type;
    private String category;
    private String product;
    private Long quantity;
    private Long weight;
    private Long um;
    private Long timeLimit;



}
