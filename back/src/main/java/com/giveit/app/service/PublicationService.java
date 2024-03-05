package com.giveit.app.service;

import com.giveit.app.dto.request.PublicationRequestDto;
import com.giveit.app.dto.response.PublicationResponseDto;
import com.giveit.app.entity.Publication;
import com.giveit.app.repository.PublicationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PublicationService implements IPublicationService {



    private PublicationRepository publicationRepository;


    @Override
    public PublicationResponseDto create(PublicationRequestDto data) {
        return null;
    }

    @Override
    public PublicationResponseDto update(Long id, PublicationRequestDto data) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public List<PublicationResponseDto> findAll() {
        return null;
    }

    @Override
    public PublicationResponseDto findById(Long id) {
        return null;
    }
}