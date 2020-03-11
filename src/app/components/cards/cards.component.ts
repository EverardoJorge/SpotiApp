import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items:any[] = [];
  constructor( private router:Router) {

  }
  showArtist(item:any){
    let idArtist;
    if (item.type === 'album') {
      idArtist = item.artists[0].id;
    }else{
      idArtist = item.id;
    }
    this.router.navigate(['/artist', idArtist]);
  }

  ngOnInit() {
  }

}
