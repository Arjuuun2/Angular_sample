import { Component, OnInit } from '@angular/core';
import {Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero:Hero= {
    id:1,
    name:'Windstorm'
  };

  hero1:Hero={
    id:2,
    name:'Blast'
  };

  hero2:Hero={
    id:3,
    name:'Tornado'
  };

  hero3:Hero={
    id:4,
    name:'Drive Knight'
  };

  heroes=HEROES;

zero='This all are S class Heros';
  constructor() { }
  
  
    selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
  


  ngOnInit(): void {

  }

}
