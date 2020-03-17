import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanetsRoot, Planet } from './planets.models';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

   private readonly PLANETS_URL = "https://swapi.co/api/planets/"; 

   public loaded:boolean = false;
   public planets:Observable<Planet[]>;

   constructor(private http:HttpClient) {
      this.planets = this.http.get<PlanetsRoot>(this.PLANETS_URL).pipe(
                        map(res => res.results),
                        tap(() => this.loaded = true)
                     );
   }
}
