import * as moment from "moment";
import { Inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service'

@Injectable()
export class AuthService {
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private http: HttpClient) { }
  login = (username: string, password: string) => {
    return this.http.post('http://localhost:3000/api/user/login', { username, password }).subscribe(
      data => {
        this.setSession(data)
        console.log(data)
      },
      error => console.log(error)
    )
  }
  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expires, 'second');
    this.storage.set('bls_token', authResult.data);
    this.storage.set("bls_expir", JSON.stringify(expiresAt.valueOf()));
  }
  logout() {
    this.storage.remove("bls_token");
    this.storage.remove("bls_expir");
  }
  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }
  isLoggedOut() {
    return !this.isLoggedIn();
  }
  getExpiration() {
    const expiration = this.storage.get("bls_expir");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
