import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../interface/movie';


@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  tmdbURL: String;

  constructor(private http: HttpClient) { 
    this.tmdbURL = 'https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api';
  }

  getMovie(): Observable<Movie[]>{
    return this.http.get<Movie[]>(`${this.tmdbURL}/movies`)
  }
  

}
