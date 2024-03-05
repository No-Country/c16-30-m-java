package com.giveit.app.service;

import com.giveit.app.dto.request.PublicationRequestDto;
import com.giveit.app.dto.request.UserRequestDto;
import com.giveit.app.dto.response.PublicationResponseDto;
import com.giveit.app.dto.response.UserResponseDto;

public interface  IPublicationService  extends ICrudService<PublicationResponseDto,PublicationRequestDto>  {
}
