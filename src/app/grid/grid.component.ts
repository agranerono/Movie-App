import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() dataSource: any;
  @Output() rowClick = new EventEmitter<number>();
  displayedColumns: string[] = ['title', 'overview', 'poster'];
}
