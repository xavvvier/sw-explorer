export interface MoviesRoot {
   results: Movie[];
}

export interface Movie {
   title: string;
   director: string;
   producer: string;
   release_date: string;
   episode_id: number;
}
