import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {

  }

  getQuery(query:string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQB0NGvYvvl1zI0m20upAmFvW_MRc1GcEhryQ3urO8YH3DZ-Jm2OsYWWHSSBgSzN4xMQZt864c9BHHNuzJI'
    });
    return this.http.get(`https://api.spotify.com/v1/${query}`, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
               .pipe( map(data => data['albums'].items ));
  }

  getArtists(term:string){
    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
               .pipe( map( data => data['artists'].items) );
  }

  getArtist(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getSong(term:string){
    return this.getQuery(`search?q=${term}&type=track&limit=15`)
               .pipe( map( data => data['tracks'].items) );
  }

  getTopTrackArtist(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe( map( data => data['tracks']) );
  }
}
