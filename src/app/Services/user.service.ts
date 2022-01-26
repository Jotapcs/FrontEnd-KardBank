import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from 'src/assets/Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  constructor(private http: HttpClient) { }

  //GET
  obterTodos(): Observable<user[]> {
    return this.http.get<user[]>('http://localhost:8080/api/user')
  }

  //POST
  inserir(user: user): Observable<void> {
    return this.http.post<void>('http://localhost:8080/api/user', user)
  }

  //PUT
  atualizar(user: user): Observable<void> {
    return this.http.put<void>('http://localhost:8080/api/user', user)
  }

  //DELETE
  excluir(id: number): Observable<void> {
    return this.http.request<void>('DELETE', 'http://localhost:8080/api/user', {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
      }),
      body: { id: id }
  });
  }
}
