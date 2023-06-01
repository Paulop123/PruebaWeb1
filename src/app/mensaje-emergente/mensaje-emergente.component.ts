import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-mensaje-emergente',
  templateUrl: './mensaje-emergente.component.html',
  styleUrls: ['./mensaje-emergente.component.css']
})
export class MensajeEmergenteComponent {

  /**
   * Constructor
   */

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }


}
