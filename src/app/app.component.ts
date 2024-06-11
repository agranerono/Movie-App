import { Component, OnInit } from '@angular/core';
import { ConnectivityService } from './connectivity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  online: boolean = true;

  constructor(private connectivityService: ConnectivityService) {}

  ngOnInit(): void {
    this.connectivityService.getOnlineStatus().subscribe(status => {
      this.online = status;
    });
  }
}
