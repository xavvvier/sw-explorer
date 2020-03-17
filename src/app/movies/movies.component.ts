import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movies.models';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public selected: Movie;

  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {}

  public select(movie: Movie) {
     this.selected = movie;
  }

}
