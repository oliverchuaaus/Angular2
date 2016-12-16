package com.tougher.poc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tougher.poc.model.Hero;
import com.tougher.poc.repository.HeroRepository;

@Service
public class HeroService {
	@Autowired
	private HeroRepository repo;

	public Hero createHero(Hero Hero) {
		Hero newHero = repo.save(Hero);
		return newHero;
	}

	public Hero updateHero(String id, Hero Hero) {
		Hero newHero = repo.save(Hero);
		return newHero;
	}

	public void deleteHero(String id) {
		repo.delete(repo.findById(id));
	}

	public Hero getHero(String id) {
		Hero newHero = repo.findById(id);
		return newHero;
	}

	public List<Hero> getHeroList() {
		List<Hero> heroList = repo.findAll();
		return heroList;
	}

}
