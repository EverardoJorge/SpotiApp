import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.css']
})
export class SearchArtistComponent implements OnInit {

  resultArtist:any[] = [];
  loading: boolean;

  constructor(private spotify:SpotifyService) {
  }

  searchArtist(term:string){
    this.loading = true;
    this.spotify.getArtists(term).subscribe((data:any) => {
      this.resultArtist = data;
      this.loading = false;
    })
  }

  ngOnInit() {
  }
}
