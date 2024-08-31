import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MsgUsuarioComponent } from '../msg-usuario/msg-usuario.component';
import { User } from '../Models/user';
import { FormsModule } from '@angular/forms';
import { Mensaje } from '../Models/mensaje';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MsgUsuarioComponent,FormsModule,CommonModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent implements OnInit, AfterViewChecked{
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  Users:User[]=[]
  mensajes:Mensaje[]=[]


  ngOnInit(): void {
    this.Users=[
      {
        nombre: 'Pepe',
        edad: 21
      },
      {
        nombre: 'María',
        edad: 22
      }
    ]

  }
  ngAfterViewChecked(): void {
    this.autoScroll();
  }

  autoScroll(){
    this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
  }

  mostrarMsg(mensaje:Mensaje){
    this.mensajes.push(mensaje)
    setTimeout(() => this.autoScroll(), 0);
  }

}
