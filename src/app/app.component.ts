import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MensajeEmergenteComponent } from './mensaje-emergente/mensaje-emergente.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Constructor
   */

  constructor(private dialog: MatDialog) { }


  openPopup() {

    this.dialog.open(MensajeEmergenteComponent, {

      /**Objetos */
      data: {
        title: 'Mensaje',
        mensaje: 'Haz hecho click en iniciar sesion.'
      }
    });
  }

  openPopup2() {

    this.dialog.open(MensajeEmergenteComponent, {

      /**Obejetos */
      data: {
        title: 'Mensaje',
        mensaje: 'Haz hecho click en "Cancelar".'
      }
    });
  }


  


  

}
