import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  resultAnArtist: any = {};
  loading: boolean;
  topTracks:any[] = [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe(params => {
      this.getAnArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getAnArtist(id: string) {
    this.loading = true;
    setTimeout(() => {
      this.spotify.getArtist(id).subscribe(data => {
        console.log(data);
        this.resultAnArtist = data;
        this.loading = false;

      });
    }, 1000);
  }

  getTopTracks(id:string){
  this.spotify.getTopTrackArtist(id).subscribe(topTracks => {
    console.log(topTracks);
    this.topTracks = topTracks;
  });
  }

  ngOnInit() {
  }

}
