import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey: string = '8bc8a5f0558028ece3540924d2f9f068';
  private apiUrl: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  getMovieDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieCredits(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }
}

export interface Crew {
  job: string;
  name: string;
}

export interface Cast {
  name: string;
  character: string;
}
