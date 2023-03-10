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
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'http://localhost:4200'
      })
    };

    let post=this.httpClient.post('http://127.0.0.1:3000/insertar',body, httpOptions);
    console.log(post);
   
    return post;
  }
}
