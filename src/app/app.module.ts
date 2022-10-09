import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BiomaComponent } from './bioma/bioma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { TipoComponent } from './tipo/tipo.component';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [
    AppComponent,
    BiomaComponent,
    PokemonComponent,
    TipoComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CardModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // PrimeNG
    ButtonModule,
    ChartModule,
    DialogModule,
    DropdownModule,
    ProgressBarModule,
    SpeedDialModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
