package com.giveit.app.dto.request;

import com.giveit.app.entity.PublicationType;
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
    private PublicationType type;
    private String name;
    private String category;
    private String product;
    private Long quantity;
    private Long weight;
}
