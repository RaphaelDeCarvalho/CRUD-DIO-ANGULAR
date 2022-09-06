import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/f1a8dc91-e5cd-427f-8a2a-82554828f66f'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  // C.R.U.D. = CREATE, READ, UPDATE, DELETE.

  // Retorna a lista de usuários READ

  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl);

  }

  // Salva usuário no banco CREATE
  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }

  // Exclui o usuário do banco DELETE
  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

}
