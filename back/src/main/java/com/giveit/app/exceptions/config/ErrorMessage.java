package com.giveit.app.exceptions.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.validation.BindingResult;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Getter @Setter
public class ErrorMessage {
    private String name;
    private Object message;

    public ErrorMessage(Exception e){
        this.name = e.getClass().getName();
        this.message = e.getMessage();
    }

    public ErrorMessage(Exception e, BindingResult result){
        this.name = e.getClass().getName();
        List<Map<String,String>> messages= result.getFieldErrors().stream()
                .map(err -> {
                    Map<String,String> error = new HashMap<>();
                    error.put(err.getField(), err.getDefaultMessage());
                    return error;
                }).collect(Collectors.toList());
        this.message = messages;
    }
}
