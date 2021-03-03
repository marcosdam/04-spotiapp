import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  errores: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService ) { 
    this.loading = true;
    this.errores = false;

    this.spotify.getNuevosLanzamientos()
    .subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, ( errorServicio ) => {
      this.loading = false;
      this.errores = true;
      console.log(errorServicio);
      this.mensajeError = errorServicio.error.message;
    } );
  }

}
