package com.giveit.app.service;

import com.giveit.app.dto.request.UserRequestDto;
import com.giveit.app.dto.response.UserResponseDto;
public interface IUserService extends ICrudService<UserResponseDto, UserRequestDto> {
}
