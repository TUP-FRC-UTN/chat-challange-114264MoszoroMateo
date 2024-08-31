import { LocalizedString } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Mensaje } from '../Models/mensaje';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-msg-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './msg-usuario.component.html',
  styleUrl: './msg-usuario.component.css'
})
export class MsgUsuarioComponent {
  @Input() user:string =''
  contenidoTextarea:string=''
  @Output() msgEnviado = new EventEmitter<Mensaje>()
  
  enviar(){
    const mensaje = {
      contenido: this.contenidoTextarea,
      username: this.user,
      hs: new Date
    }
    this.msgEnviado.emit(mensaje)
  }



}
