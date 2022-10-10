import { Pipe, PipeTransform } from '@angular/core';
import { TipoService } from './tipo.service';


@Pipe({
  name: 'idToTipo'
})
export class IdToTipoPipe implements PipeTransform {

  constructor(private tipoService: TipoService) {
  }

  async transform(id: string): Promise<string> {
    const tipo = await this.tipoService.getTipoById(id);
    return tipo.tipo;
  }

}
