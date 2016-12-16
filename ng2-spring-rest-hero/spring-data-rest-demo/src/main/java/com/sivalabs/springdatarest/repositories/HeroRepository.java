package com.sivalabs.springdatarest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sivalabs.springdatarest.entities.Hero;

public interface HeroRepository extends JpaRepository<Hero, Long>
{


}
