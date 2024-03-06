package com.giveit.app.controller;

import com.giveit.app.dto.request.PublicationRequestDto;

import com.giveit.app.entity.PublicationType;
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
    @GetMapping("/by/")
    public ResponseEntity<?> findFiltered(@RequestParam(defaultValue = "FOOD") PublicationType type, @RequestParam(required = false) String category
            , @RequestParam(required = false) String name, @RequestParam(required = false) String product){
        return responseBuilder(HttpStatus.OK, service.findFiltered(type,category,name,product));
    }

    @PostMapping()
    public ResponseEntity<?> create(@RequestBody PublicationRequestDto data){
        return responseBuilder(HttpStatus.OK, service.create(data));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id, @RequestBody PublicationRequestDto data){
        return responseBuilder(HttpStatus.OK, service.update(id, data));
    }

    @PutMapping("/cancel/{id}")
    public ResponseEntity<?> cancel(@PathVariable("id") Long id){
        service.cancel(id);
        return responseBuilder(HttpStatus.OK, "Publication cancelled");
    }

    @PutMapping("/complete/{id}")
    public ResponseEntity<?> complete(@PathVariable("id") Long id){
        service.cancel(id);
        return responseBuilder(HttpStatus.OK, "Publication completed");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
        service.delete(id);
        return responseBuilder(HttpStatus.OK, "Deleted");
    }


}
