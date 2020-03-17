import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../planets.service';
import { Planet } from '../planets.models';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  public selected: Planet;

  constructor(public planetsService: PlanetsService) { }

  ngOnInit(): void {}

  public select(planet: Planet) {
     this.selected = planet;
  }

}
