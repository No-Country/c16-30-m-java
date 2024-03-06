package com.giveit.app.service;

import com.giveit.app.dto.request.PublicationRequestDto;
import com.giveit.app.dto.response.PublicationResponseDto;
import com.giveit.app.entity.Publication;
import com.giveit.app.entity.PublicationStatus;
import com.giveit.app.entity.PublicationType;
import com.giveit.app.exceptions.ResourceNotFoundException;
import com.giveit.app.mapper.GenericMapper;
import com.giveit.app.repository.PublicationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static com.giveit.app.repository.PublicationSpecification.*;

@Service
@RequiredArgsConstructor
public class PublicationService implements IPublicationService {


    private final GenericMapper mapper;

    private final PublicationRepository repository;


    @Override
    public PublicationResponseDto create(PublicationRequestDto data) {
        System.out.println(data.getType());
        Publication publication= mapper.map(data, Publication.class);
        publication.setType(data.getType());
        System.out.println(publication.getType());
        publication.setStatus(PublicationStatus.CREATED);
        repository.save(publication);


        return mapper.map(publication, PublicationResponseDto.class);
    }

    @Override
    public PublicationResponseDto update(Long id, PublicationRequestDto data) {
        Publication publication = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Publication not found"));
        publication = mapper.map(data, Publication.class);
        publication.setId(id);
        repository.save(publication);

        return mapper.map(publication, PublicationResponseDto.class);
    }

    @Override
    public void delete(Long id) {
        Publication publication = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Publication not found"));
        repository.delete(publication);
    }

    @Override
    public List<PublicationResponseDto> findAll() {
        return repository.findAll().stream().map(publication -> mapper.map(publication, PublicationResponseDto.class)).toList();
    }

    @Override
    public PublicationResponseDto findById(Long id) {
        return mapper.map(repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Publication not found")), PublicationResponseDto.class);
    }

    @Override
    public void complete(Long id) {
        Publication publication = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Publication not found"));
        publication.setStatus(PublicationStatus.COMPLETED);
        repository.save(publication);

    }

    @Override
    public void cancel(Long id) {
        Publication publication = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Publication not found"));
        publication.setStatus(PublicationStatus.CANCELED);
        repository.save(publication);

    }

    @Override
    public List<PublicationResponseDto> findFiltered(PublicationType type, String category, String name, String product) {
        Specification query = Specification.where(hasStatus(PublicationStatus.CREATED).and(hasType(type)));
        if(category!=null && !category.isBlank())
            query.and(hasCategory(category));

        if(name!=null && !name.isBlank())
            query.and(hasName(name));

        if(product!=null && !product.isBlank())
            query.and(hasProduct(product));

        return mapper.mapAll(
                repository.findAll(query)
                ,PublicationResponseDto.class);
    }
}