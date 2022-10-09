import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { TipoComponent } from "./tipo/tipo.component";
import { BiomaComponent } from "./bioma/bioma.component";
import { PokemonComponent } from "./pokemon/pokemon.component";

const routes: Routes = [
    { path: 'tipo', component: TipoComponent },
    { path: 'bioma', component: BiomaComponent },
    { path: 'pokemon', component: PokemonComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }