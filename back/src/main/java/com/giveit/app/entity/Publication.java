package com.giveit.app.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Entity
@Table(name= "publication")


public class Publication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
