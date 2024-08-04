import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../service/tmdb.service';
import { NgFor, NgIf } from '@angular/common';
import { Movie } from '../interface/movie';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  movieList: Movie[] = [];
  filterList: Movie[] = [];

  constructor(private tmdbs: TmdbService){}

  ngOnInit(): void {
    this.getList();
  }


  getList(){
    this.tmdbs.getMovie().subscribe({next: (res: Movie[]) =>{
      this.movieList = res;
      this.filterList = res;
    }})
  }

  search(event: Event) {
    const query = (event.target as HTMLInputElement).value;
    this.filterList = this.movieList.filter(list =>
      list.Title.toLowerCase().includes(query.toLowerCase()) ||
      list.Runtime.toLowerCase().includes(query.toLowerCase()) ||
      list.Year.toLowerCase().includes(query.toLowerCase())
    );
  }
}
