import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from '../people.models';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  public selected: Person;

  constructor(public peopleService: PeopleService) { }

  ngOnInit(): void {}

  public select(person: Person) {
     this.selected = person;
  }

}
