import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Resultado } from '../../interfaces/pokeApi';
import { HomeComponent } from '../../pages/home/home.component';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-tarjeta-pokemon',
  standalone: true,
  imports: [HomeComponent, CommonModule],
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrl: './tarjeta-pokemon.component.scss'
})
export class TarjetaPokemonComponent implements OnChanges{

  constructor(private pokemonService: PokemonService) {

  }

  ngOnChanges(): void {
    this.extraerInformacion();
  }

  @Input() data?: Resultado;
  id:string = "0";

  extraerInformacion() {
    if(this.data){
      this.id = this.data.url.substring(34,this.data.url.length-1);
    }
  }

}
