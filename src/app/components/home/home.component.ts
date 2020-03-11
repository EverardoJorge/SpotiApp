import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor(private spotify: SpotifyService) {
    this.error = false;
    this.loading = true;
    setTimeout(() => {
      this.spotify.getNewReleases().subscribe((data: any) => {
        this.newSongs = data;
        this.loading = false;
      }, (error) => {
        this.loading = false;
        this.error = true;
        this.errorMessage =  error.error.error.message;
      });
    }, 1500);
  }

  ngOnInit() {
  }

}
