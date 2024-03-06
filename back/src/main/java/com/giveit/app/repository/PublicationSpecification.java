package com.giveit.app.repository;

import com.giveit.app.entity.Publication;
import com.giveit.app.entity.PublicationStatus;
import com.giveit.app.entity.PublicationType;
import org.springframework.data.jpa.domain.Specification;

public class PublicationSpecification {

    public static Specification<Publication>  hasType(PublicationType type){
        return (root, query, builder) -> builder.equal(root.get("type"),type);
    }

    public static Specification<Publication>  hasStatus(PublicationStatus status){
        return (root, query, builder) -> builder.equal(root.get("status"),status);
    }

    public static Specification<Publication>  hasCategory(String category){
        if(category==null || category.isBlank())
            return (root, query, builder) -> builder.conjunction();
        return (root, query, builder) -> builder.equal(root.get("category"),category);
    }

    public static Specification<Publication>  hasName(String name){
        if(name==null || name.isBlank())
            return (root, query, builder) -> builder.conjunction();
        return (root, query, builder) -> builder.like(root.get("name"),"%" + name + "%");
    }

    public static Specification<Publication>  hasProduct(String product){
        if(product==null || product.isBlank())
            return (root, query, builder) -> builder.conjunction();
        return (root, query, builder) -> builder.like(root.get("product"),"%" + product + "%");
    }
}

