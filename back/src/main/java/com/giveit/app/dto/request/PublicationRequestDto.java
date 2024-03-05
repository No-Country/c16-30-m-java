package com.giveit.app.dto.request;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter


public class PublicationRequestDto {
    private Long ownerId;
    private Long userId;
    private String description;
    private String type;
    private String category;
    private String product;
    private Long quantity;
    private Long weight;
}
