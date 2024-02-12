package com.giveit.app.service;

import java.util.List;

public interface ICrudService <R, D>{

    R create(D data);

    R update(Long id,D data);

    void delete(Long id);

    List<R> findAll();

    R findById(Long id);
}

