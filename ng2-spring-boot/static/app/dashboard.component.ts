import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
	selector: 'my-dashboard',
	moduleId: module.id,
	templateUrl: 'dashboard.component.html',
})
export class DashboardComponent {
	heroList: Hero[] = [];

	constructor(private heroService: HeroService,
		private router: Router,

	) { }

	ngOnInit(): void {
		this.heroService.getHeroes()
			.then(heroes => this.heroList = heroes.slice(0, 4));
	}

	gotoDetail(hero: Hero): void {
		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}
}