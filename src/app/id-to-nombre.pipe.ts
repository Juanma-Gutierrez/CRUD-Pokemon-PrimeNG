import { Pipe, PipeTransform } from '@angular/core';
import { BiomaService } from './bioma.service';

@Pipe({
  name: 'idToNombre'
})
export class IdToNombrePipe implements PipeTransform {

  constructor(private biomaService:BiomaService){

    }
  
  async transform(id: string): Promise<string> {
    const bioma = await this.biomaService.getBiomaById(id);
    return bioma.nombre;
  }

}
