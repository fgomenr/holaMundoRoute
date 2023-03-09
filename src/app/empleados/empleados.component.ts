import { Component } from '@angular/core';
import { MongoService } from '../mongo.service';
import { OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent {
  arrayProductos:any[]=[];

  constructor(private serviMongo: MongoService, private rd: Renderer2) {
    // hay que acceder al DOM con rendererthis.rd
    this.serviMongo.leerBBDD().subscribe((data) => {
      console.log(data);
      let arrayEmpleados=JSON.parse(data);
      arrayEmpleados.forEach((element: { nombre: any; apellidos: any; }) => {
      this.arrayProductos.push({nombre:element.nombre, apellidos:element.apellidos})
      });
    });
  }
  
  leerBBDD(): void {
    this.serviMongo.leerBBDD().subscribe((data) => {
      console.log(data);
    });
  }
}
