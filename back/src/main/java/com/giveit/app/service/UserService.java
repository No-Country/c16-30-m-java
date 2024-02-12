package com.giveit.app.service;

import com.giveit.app.dto.request.UserRequestDto;
import com.giveit.app.dto.response.UserResponseDto;

import java.util.List;

public class UserService implements IUserService {
    @Override
    public UserResponseDto create(UserRequestDto data) {
        return null;
    }

    @Override
    public UserResponseDto update(Long id, UserRequestDto data) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public List<UserResponseDto> findAll() {
        return null;
    }

    @Override
    public UserResponseDto findById(Long id) {
        return null;
    }
}
