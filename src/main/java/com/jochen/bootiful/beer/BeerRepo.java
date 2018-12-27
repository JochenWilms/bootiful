package com.jochen.bootiful.beer;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface BeerRepo extends JpaRepository<Beer,Long> {

}
