import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesRoot, Movie } from './movies.models';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

   private readonly MOVIES_URL = "https://swapi.co/api/films/"; 

   public loaded:boolean = false;
   public movies:Observable<Movie[]>;

   constructor(private http:HttpClient) {
      this.movies = this.http.get<MoviesRoot>(this.MOVIES_URL).pipe(
                        map(res => res.results),
                        tap(() => this.loaded = true)
                     );
   }

}
