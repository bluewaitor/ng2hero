import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HeroSearchService } from "../hero-search.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  providers: [HeroSearchService]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    console.log('init');
    this.heroService.getHeroes().
      then(heroes => this.heroes = heroes.slice(1, 5));
  }

}
