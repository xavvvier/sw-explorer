import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeopleRoot, Person } from './people.models';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

   private readonly PEOPLE_URL = "https://swapi.co/api/people/"; 

   public loaded:boolean = false;
   public people:Observable<Person[]>;

   constructor(private http:HttpClient) {
      this.people = this.http.get<PeopleRoot>(this.PEOPLE_URL).pipe(
                        map(res => res.results),
                        tap(() => this.loaded = true)
                     );
   }
}
