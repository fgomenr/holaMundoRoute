import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MongoService {
  constructor(private httpClient: HttpClient) {}

  leerBBDD(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:3000/leer');
  }

  insertarBBDD(body:any): Observable<any> {
    console.log(body);
    const headers = new HttpHeaders();   //BUSCAR INFO DE ESTO
    headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.set()
    let post=this.httpClient.post('http://127.0.0.1:3000/insertar',body, {headers: headers});
    console.log(post);
    setTimeout(() => {
      
    }, 10000000);
    return post;
  }
}
