import { Component, Input } from '@angular/core';
import { Resultado } from '../../interfaces/pokeApi';
import { HomeComponent } from '../../pages/home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta-pokemon',
  standalone: true,
  imports: [HomeComponent, CommonModule],
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrl: './tarjeta-pokemon.component.scss'
})
export class TarjetaPokemonComponent {

  @Input() data?: Resultado;
}
