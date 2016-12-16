package com.tougher.poc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tougher.poc.model.Hero;
import com.tougher.poc.service.HeroService;

@RestController
@RequestMapping("/rest/")
public class HeroController {
	@Autowired
	HeroService service;
	
	@RequestMapping(value = "heroes", method = RequestMethod.GET)
	public List<Hero> getHeroList() {
		return service.getHeroList();
	}
	
	@RequestMapping(value = "heroes/{id}", method = RequestMethod.GET)
	public Hero getHero(@PathVariable String id) {
		return service.getHero(id);
	}

	@RequestMapping(value = "heroes", method = RequestMethod.POST)
	public Hero createHero(@RequestBody Hero hero) {
		return service.createHero(hero);
	}
	
	@RequestMapping(value = "heroes/{id}", method = RequestMethod.PUT)
	public Hero updateHero(@PathVariable String id, @RequestBody Hero hero) {
		return service.updateHero(id, hero);
	}
	
	@RequestMapping(value = "heroes/{id}", method = RequestMethod.DELETE)
	public void deleteHero(@PathVariable String id) {
		service.deleteHero(id);
	}
	
	@RequestMapping(value = "greeting/{name}", method = RequestMethod.GET)
	public String getGreeting(@PathVariable String name) {
		return "Hello " + name;
	}
}
