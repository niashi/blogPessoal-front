import { UserLogin } from './../model/UserLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  // Observable: verifica o método de entrada, ou seja, analisa se o que entra é uma variável do tipo UserLogin
  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(`${environment.server}/usuarios/logar`, userLogin)
    // Aqui, o Observable verifica se o que é enviado (post) é do tipo UserLogin
  }

  // Observable: verifica o método de entrada, ou seja, analisa se o que entra é uma variável do tipo User
  cadastrar(user: User): Observable<User> {
    return this.http.post<User>(`${environment.server}/usuarios/cadastrar`, user)
    // Aqui, o Observable verifica se o que é enviado (post) é do tipo User
  }

  getByIdUser(id: number): Observable<User> {
    return this.http.get<User>(`${environment.server}/${id}`)
  }

  logado() {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    } 

    return ok
  }
}