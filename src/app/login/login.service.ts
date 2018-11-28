import * as moment from "moment";
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  login(username: string, password: string) {
    return this.http.post('http://localhost:3000/api/user/login', { username, password })
      .do(res => this.setSession);
  }
  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }
  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }
  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }
  isLoggedOut() {
    return !this.isLoggedIn();
  }
  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
