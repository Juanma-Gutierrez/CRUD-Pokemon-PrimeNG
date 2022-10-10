import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TipoService } from '../tipo.service';
import { Tipo } from '../tipo';


@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.scss']
})
export class TipoComponent implements OnInit {

  tipo: Tipo[] = [];
  muestraFormularioTipo = false;
  accion = "Nuevo tipo";

  constructor(private tipoService: TipoService) {
    this.cargaTipo();
  }

  ngOnInit(): void {
  }


  formularioTipo = new FormGroup({
    _id: new FormControl(''),
    tipo: new FormControl(''),
  });

  async cargaTipo() {
    this.tipo = await this.tipoService.getTipo();
  }

  editaTipo(tipo: Tipo) {
    this.muestraFormularioTipo = true;
    this.accion = "Editar tipo";
    this.formularioTipo.patchValue(tipo);
  }

  async borraTipo(id: string) {
    await this.tipoService.deleteTipo(id);
    this.cargaTipo();
  }

  async submitTipo() {
    let tipo = <Tipo>this.formularioTipo.value;
    if (this.accion === "Nuevo tipo") {
      await this.tipoService.addTipo(tipo); // lo cargamos con await como promesa para que se muestre correctamente cuando ya está grabado
      this.formularioTipo.reset(); // resetea el formulario para limpiarlo
      this.muestraFormularioTipo = false;
      this.cargaTipo();
    }
    else {
      await this.tipoService.updateTipo(<string>tipo["_id"], tipo);
    }
    this.formularioTipo.reset();
    this.muestraFormularioTipo = false;
    this.cargaTipo();
    this.accion = "Nuevo tipo";
  }

}

