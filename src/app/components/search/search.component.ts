import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  resultSong: any = [];
  loading: boolean;
  preview: string;

  constructor(private spotify: SpotifyService) {

  }

  searchSong(term: string) {
    this.loading = true;
    console.log(term);
    setTimeout(() => {
      this.spotify.getSong(term)
        .subscribe((data: any) => {
          console.log(data);
          this.resultSong = data;
          this.loading = false;
        });
    }, 2000);
  }
  ngOnInit() {
  }

}
