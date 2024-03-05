package com.giveit.app.repository;

import com.giveit.app.entity.Publication;
import com.giveit.app.entity.User;
import jakarta.persistence.Id;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface PublicationRepository extends JpaRepository <Publication,Long>{

}
