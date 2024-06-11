import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TmdbService, Crew, Cast } from '../tmdb.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  movie: any = null;
  credits: any = null;
  director: string = 'N/A';
  cast: Cast[] = [];
  showAllDetails: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tmdbService: TmdbService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tmdbService.getMovieDetails(+id).subscribe((data: any) => {
        data.additional_info = {
          budget: data.budget || 'N/A',
          revenue: data.revenue || 'N/A',
          genres: data.genres.map((genre: any) => genre.name).join(', '),
          production_companies: data.production_companies.map((company: any) => company.name).join(', ')
        };
        this.movie = data;
      });

      this.tmdbService.getMovieCredits(+id).subscribe((data: any) => {
        this.credits = data;
        this.director = data.crew.find((person: Crew) => person.job === 'Director')?.name || 'N/A';
        this.cast = data.cast;
      });
    }
  }

  toggleDetails(): void {
    this.showAllDetails = !this.showAllDetails;
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
