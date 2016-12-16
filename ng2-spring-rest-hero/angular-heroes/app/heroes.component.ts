import { Component, OnInit} from '@angular/core';
import { Router } 			from '@angular/router';
import { Hero } 			from './hero';
import { HeroService } 		from './hero.service';

@Component({
  selector: 'my-heroes',
  moduleId: module.id,
  templateUrl: 'heroes.component.html',
})

export class HeroesComponent implements OnInit{ 
	title = 'Tour of Heroes';
	heroList : Hero[];
	selectedHero: Hero;

	constructor(
	  private router: Router,
	  private heroService: HeroService) {
	}
	
	getHeroes(): void {
  	    this.heroService.getHeroes().then(heroes => this.heroList = heroes);
	}
	
	ngOnInit(): void {
		this.getHeroes();
	}
	
	onSelect(hero: Hero): void {
    this.selectedHero = hero;
	}	
	
	gotoDetail(hero: Hero): void {
	  let link = ['/detail', this.selectedHero.id];
	  this.router.navigate(link);
	}	
	
	add(name: string): void {
	console.log('in add');
  name = name.trim();
  if (!name) { return; }
  	console.log('before create new');
  let newHero1 = new Hero();
	newHero1.id= 0;
  newHero1.name= name;
		  	console.log('before create call' + newHero1.name);

  this.heroService.create(newHero1)
    .then(hero => {
      this.heroList.push(hero);
      this.selectedHero = null;
    });
}


delete(hero: Hero): void {
  this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroList = this.heroList.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
}

}

