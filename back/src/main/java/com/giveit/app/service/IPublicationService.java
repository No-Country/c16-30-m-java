package com.giveit.app.service;

import com.giveit.app.dto.request.PublicationRequestDto;
import com.giveit.app.dto.request.UserRequestDto;
import com.giveit.app.dto.response.PublicationResponseDto;
import com.giveit.app.dto.response.UserResponseDto;
import com.giveit.app.entity.PublicationType;

import java.util.List;

public interface  IPublicationService  extends ICrudService<PublicationResponseDto,PublicationRequestDto>  {
    public void complete(Long id);

    public void cancel(Long id);

    public List<PublicationResponseDto> findFiltered(PublicationType type, String category, String name, String product);
}
