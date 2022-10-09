import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BiomaService } from '../bioma.service';
import { Bioma } from '../bioma';

@Component({
  selector: 'app-bioma',
  templateUrl: './bioma.component.html',
  styleUrls: ['./bioma.component.scss']
})

export class BiomaComponent implements OnInit {

  accion = "Nuevo bioma";
  bioma: Bioma[] = [];
  muestraFormularioBioma = false;

  constructor(private biomaService: BiomaService) {
    this.cargaBioma();
  }

  ngOnInit(): void {
  }

  formularioBioma = new FormGroup({
    _id: new FormControl(''),
    nombre: new FormControl(''),
  });

  async cargaBioma() {
    this.bioma = await this.biomaService.getBioma();
    console.log(this.bioma);
  }

  editaBioma(bioma: Bioma) {
    this.muestraFormularioBioma = true;
    this.accion = "Editar bioma";
    this.formularioBioma.patchValue(bioma);
  }

  async borraBioma(id: string) {
    await this.biomaService.deleteBioma(id);
    this.cargaBioma();
  }

  async submitBioma() {
    let bioma = <Bioma>this.formularioBioma.value;
    if (this.accion === "Nuevo bioma") {
      await this.biomaService.addBioma(bioma); // lo cargamos con await como promesa para que se muestre correctamente cuando ya está grabado
      this.formularioBioma.reset(); // resetea el formulario para limpiarlo
      this.muestraFormularioBioma = false;
      this.cargaBioma();
    }
    else {
      await this.biomaService.updateBioma(<string>bioma["_id"], bioma);
    }
    this.formularioBioma.reset();
    this.muestraFormularioBioma = false;
    this.cargaBioma();
    this.accion = "Nuevo bioma";
  }

}

