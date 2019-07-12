import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../poke-api.service';

@Component({
  selector: 'app-pokemain',
  templateUrl: './pokemain.component.html',
  styles: []
})
export class PokeMainComponent implements OnInit {

  constructor(private pa:PokeApiService) { }

  ngOnInit() {
    console.log('pokeMain')
    this.pa.init();
  }

}
