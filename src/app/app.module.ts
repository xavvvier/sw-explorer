import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { MoviesComponent } from './movies/movies.component';
import { PlanetsComponent } from './planets/planets.component';

const appRoutes: Routes = [
   { path: 'movies', component: MoviesComponent},
   { path: 'people', component: PeopleComponent},
   { path: 'planets', component: PlanetsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    MoviesComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
       appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
