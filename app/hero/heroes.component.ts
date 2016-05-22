import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/hero/heroes.html',
    styleUrls: ['app/hero/heroes.css']
})

export class HeroesComponent implements OnInit{
    heroes: Hero[] = [];
    selectedHero: Hero;

    constructor(
        private _router: Router,
        private _heroService: HeroService) { }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', {id: this.selectedHero.id }]);
    }
}