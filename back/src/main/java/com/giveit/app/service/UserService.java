package com.giveit.app.service;

import com.giveit.app.dto.request.UserRequestDto;
import com.giveit.app.dto.response.UserResponseDto;
import com.giveit.app.entity.User;
import com.giveit.app.exceptions.ResourceAlreadyExistsException;
import com.giveit.app.exceptions.ResourceNotFoundException;
import com.giveit.app.mapper.GenericMapper;
import com.giveit.app.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ExpressionException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService {


    private final GenericMapper mapper;
    private final UserRepository repository;
    @Override
    public UserResponseDto create(UserRequestDto data) {
        User user = repository.findByEmail(data.getEmail()).orElse(null);
        if(user!=null)
            throw new ResourceAlreadyExistsException("User already exists");

        user = mapper.map(data, User.class);

        repository.save(user);

        return mapper.map(user, UserResponseDto.class);
    }

    @Override
    public UserResponseDto update(Long id, UserRequestDto data) {
        User user = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        user = mapper.map(data, User.class);
        user.setId(id);
        repository.save(user);

        return mapper.map(user, UserResponseDto.class);
    }

    @Override
    public void delete(Long id) {
        User user = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        repository.delete(user);
    }

    @Override
    public List<UserResponseDto> findAll() {
        return mapper.mapAll(repository.findAll(), UserResponseDto.class);
    }

    @Override
    public UserResponseDto findById(Long id) {
        User user = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));

        return mapper.map(user, UserResponseDto.class);
    }
}
