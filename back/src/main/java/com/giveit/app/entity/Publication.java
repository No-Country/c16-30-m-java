package com.giveit.app.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;


@Entity
@Table(name= "publications")
@Getter
@Setter

public class Publication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private Long ownerId;
    private Long userId;
    private String description;
    private String type;
    private String category;
    private String product;
    private Long quantity;
    private Long weight;
    private PublicationStatus status;

}
