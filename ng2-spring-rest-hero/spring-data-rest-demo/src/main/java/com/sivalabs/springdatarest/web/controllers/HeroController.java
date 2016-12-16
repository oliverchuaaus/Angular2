package com.sivalabs.springdatarest.web.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sivalabs.springdatarest.entities.Hero;
import com.sivalabs.springdatarest.services.HeroService;

/**
 * @author Siva
 * 
 */
@Controller
@RequestMapping(value = "/hero")
public class HeroController {
	@Autowired
	private HeroService service;

	@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Hero> getHeroes() {
		List<Hero> users = service.findAllHeroes();
		return users;
	}

	@RequestMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Hero getHero(@PathVariable Long id) {
		Hero hero = service.findById(id);
		return hero;
	}

	@RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Hero create(@RequestBody Hero hero) {
		hero = service.create(hero);
		return hero;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Hero update(@RequestBody Hero hero) {
		hero = service.update(hero);
		return hero;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public Hero delete(@PathVariable Long id) {
		Hero hero = service.delete(id);
		return hero;
	}
}
