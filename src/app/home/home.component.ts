import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.2s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  dataSource = new MatTableDataSource<any>();
  viewMode: 'cards' | 'table' = 'cards';
  isLoading: boolean = true;

  displayedColumns: string[] = ['title', 'overview', 'poster'];

  constructor(private tmdbService: TmdbService, private router: Router) {}

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe((data: any) => {
      this.movies = data.results;
      this.dataSource.data = this.movies;
      this.isLoading = false;
    });
  }

  toggleViewMode(): void {
    this.viewMode = this.viewMode === 'cards' ? 'table' : 'cards';
  }

  goToDetail(id: number): void {
    this.router.navigate(['/detail', id]);
  }
}
