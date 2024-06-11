import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() movie: any;
  @Output() selectMovie = new EventEmitter<number>();

  onCardClick() {
    this.selectMovie.emit(this.movie.id);
  }
}
