package com.giveit.app.dto.response;

import com.giveit.app.entity.PublicationStatus;
import com.giveit.app.entity.PublicationType;
import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter


public class PublicationResponseDto {

    private Long Id;
    private Long ownerId;
    private Long userId;
    private String description;
    private PublicationType type;
    private String name;
    private String category;
    private String product;
    private Long quantity;
    private Long weight;
    private PublicationStatus status;



}
