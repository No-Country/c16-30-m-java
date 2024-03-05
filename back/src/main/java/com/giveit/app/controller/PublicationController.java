package com.giveit.app.controller;

import com.giveit.app.dto.request.PublicationRequestDto;

import com.giveit.app.service.IPublicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import static com.giveit.app.exceptions.config.ResponseBuilder.responseBuilder;

@RestController
@RequestMapping("/publications")
@RequiredArgsConstructor

public class PublicationController {


    private final IPublicationService service;
    @GetMapping
    public ResponseEntity<?> findAll(){
        return responseBuilder(HttpStatus.OK, service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> find(@PathVariable("id") Long id){
        return responseBuilder(HttpStatus.OK, service.findById(id));
    }

    @PostMapping()
    public ResponseEntity<?> update(@RequestBody PublicationRequestDto data){
        return responseBuilder(HttpStatus.OK, service.create(data));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id, @RequestBody PublicationRequestDto data){
        return responseBuilder(HttpStatus.OK, service.update(id, data));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
        service.delete(id);
        return responseBuilder(HttpStatus.OK, "Deleted");
    }


}
