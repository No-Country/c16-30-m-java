package com.giveit.app.repository;

import com.giveit.app.dto.response.PublicationResponseDto;
import com.giveit.app.entity.Publication;
import com.giveit.app.entity.PublicationStatus;
import com.giveit.app.entity.PublicationType;
import com.giveit.app.entity.User;
import jakarta.persistence.Id;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface PublicationRepository extends JpaRepository <Publication,Long>, JpaSpecificationExecutor<Publication> {
    public List<PublicationResponseDto>  findByStatusAndType(PublicationStatus status, PublicationType type);

    public List<PublicationResponseDto>  findByStatusAndTypeAndCategory(PublicationStatus status, PublicationType type, String category);


}
