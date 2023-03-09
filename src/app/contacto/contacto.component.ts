import { Component } from '@angular/core';
import { MongoService } from '../mongo.service';
import { OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  constructor(
    private serviMongo: MongoService,
    private rd: Renderer2,
    private messageService: MessageService
  ) {}

  crearEmpleado(): void {
    let body = { nombre: '', apellidos: '' };
    body.nombre = (<HTMLInputElement>document.getElementById('nombre')).value;
    body.apellidos = (<HTMLInputElement>(
      document.getElementById('apellidos')
    )).value;
    console.log(body);
    this.serviMongo.insertarBBDD(body).subscribe((data) => {
        console.log(data);
    });
    // this.messageService.add({
    //   severity: 'success',
    //   summary: 'Service Message',
    //   detail: 'Via MessageService',
    // });
  }
}
