import * as moment from "moment";
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }
  login(username: string, password: string) {
    return this.http.post('http://localhost:3000/api/user/login', { username, password }).subscribe(
      data => this.setSession(data),
      error => console.log(error)
    )
  }
  private setSession(authResult) {
    const expiresAt = moment().add(3600, 'second');
    localStorage.setItem('bls_token', authResult.data);
    localStorage.setItem("bls_expir", JSON.stringify(expiresAt.valueOf()));
  }
  logout() {
    localStorage.removeItem("bls_token");
    localStorage.removeItem("bls_expir");
  }
  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }
  isLoggedOut() {
    return !this.isLoggedIn();
  }
  getExpiration() {
    const expiration = localStorage.getItem("bls_expir");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
