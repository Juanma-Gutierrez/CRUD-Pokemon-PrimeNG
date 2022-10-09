import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Bioma } from '../bioma';
import { Tipo } from '../tipo';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})

export class PokemonComponent implements OnInit {

  pokemon: Pokemon[] = [];
  bioma: Bioma[] = [];
  tipo: Tipo[] = [];


  accion = "Nuevo Pokémon";
  muestraFormularioPokemon = false;
  muestraInfoPokemon = false;
  orden = "nombre";
  rever = 1;

  data: any;
  options: any;
  horizontalOptions: any;
  basicData: any;
  basicOptions: any;
  multiAxisData: any;
  chartOptions: any;
  multiAxisOptions: any;
  stackedData: any;
  stackedOptions: any;


  constructor(private pokemonService: PokemonService) {
    this.cargaPokemon();

    this.data = {
      labels: ['Ataque', 'Defensa', 'Vida'],
      datasets: [
        {
          label: "pokemon",
          backgroundColor: [
            '#D64045',
            '#4a5ab3',
            '#307351'],
          data: [73, 85, 652 / 10]
        }
      ]
    }

    this.options = {
      plugins: { legend: { display: false } },
      scales: {
        y: {
          ticks: {
            display: false
          }
        }
      }
    };

    this.horizontalOptions = {
      indexAxis: 'y',
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          ticks: {
            display: false
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    }

    this.chartOptions = {
      plugins: { legend: { display: false } }
    };

  }

  ngOnInit(): void {
  }

  formularioPokemon = new FormGroup({
    _id: new FormControl(''),
    nombre: new FormControl(''),
    habilidad: new FormControl(''),
    evolucion1: new FormControl(''),
    evolucion2: new FormControl(''),
    tipo: new FormControl(''),
    ataque: new FormControl(0),
    defensa: new FormControl(0),
    vida: new FormControl(0),
    bioma: new FormControl(''),

  });

  async cargaPokemon() {

    this.pokemon = await this.pokemonService.getPokemon();
  }

  editaPokemon(pokemon: Pokemon) {
    this.muestraFormularioPokemon = true;
    this.accion = "Editar Pokémon";
    this.formularioPokemon.patchValue(pokemon);
  }

  async borraPokemon(id: string) {
    await this.pokemonService.deletePokemon(id);
    this.cargaPokemon();
  }

  async submitPokemon() {
    //    let pokemon = <Pokemon>this.formularioPokemon.value;
    let pokemon = <Pokemon>this.formularioPokemon.value;
    if (this.accion === "Nuevo Pokémon") {
      await this.pokemonService.addPokemon(pokemon); // lo cargamos con await como promesa para que se muestre correctamente cuando ya está grabado
      this.formularioPokemon.reset(); // resetea el formulario para limpiarlo
      this.muestraFormularioPokemon = false;
      this.cargaPokemon();
    }
    else {
      await this.pokemonService.updatePokemon(<string>pokemon["_id"], pokemon);
    }
    this.formularioPokemon.reset();
    this.muestraFormularioPokemon = false;
    this.cargaPokemon();
    this.accion = "Nuevo Pokémon";
  }

  async muestraPokemon(pokemon: Pokemon) {
    this.muestraInfoPokemon = true;
    this.formularioPokemon.patchValue(pokemon);
  }

  ordena(nuevoOrden: string) {
    if (this.orden == nuevoOrden) {
      this.rever = this.rever * -1;
    } else {
      this.rever = 1;
    }
    this.orden = nuevoOrden;
    this.cargaPokemon();
  }



}
