package com.tougher.poc.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tougher.poc.model.Hero;

public interface HeroRepository extends MongoRepository<Hero, String> {

	public Hero findById(String id);
}
