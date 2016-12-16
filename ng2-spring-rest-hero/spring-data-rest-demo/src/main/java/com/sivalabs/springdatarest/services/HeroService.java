package com.sivalabs.springdatarest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sivalabs.springdatarest.entities.Hero;
import com.sivalabs.springdatarest.repositories.HeroRepository;

@Service
@Transactional
public class HeroService {
	@Autowired
	private HeroRepository repo;

	public List<Hero> findAllHeroes() {
		return repo.findAll();
	}

	public Hero findById(Long id) {
		return repo.findOne(id);
	}

	public Hero create(Hero hero) {
		return repo.save(hero);
	}
	
	public Hero update(Hero hero) {
		return repo.save(hero);
	}

	public Hero delete(Long id) {
		Hero hero = repo.findOne(id);
		repo.delete(hero);
		return hero;
	}

}
