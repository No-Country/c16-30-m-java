package com.giveit.app.dto.request;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter


public class PublicationRequestDto {
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
