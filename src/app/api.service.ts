import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string;
  signUpResource = '/auth/user_sign_up';
  userResource = '/getuserprofile';
  updateUserResource = '/auth/updateuserprofile';
  csrfResource = '/session/token';
  fileUploadResource = '/updateuserprofile';


  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

  userSignUp(username, password): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true
    };
    return this.http.post(this.url + this.signUpResource, JSON.stringify({username, password}), httpOptions);
  }


  updateUserInfo(): Observable<any> {
    return this.getToken().pipe(
      switchMap(token => {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': token
          }),
          withCredentials: true
        };
        return this.http.post(this.url + this.updateUserResource, JSON.stringify({test: 'test'}), httpOptions);
      })
    );
  }

  // tslint:disable-next-line:typedef
  getUserInfo() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true
    };
    return this.http.get(this.url + this.userResource, httpOptions);
  }

  uploadFile(base64string, fileType, fileName) {
    return this.getToken().pipe(
      switchMap(token => {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': token
          }),
          withCredentials: true
        };
        return this.http.post(this.url + this.fileUploadResource, JSON.stringify({base64string, fileType, fileName}), httpOptions);
      })
    );
  }

  // tslint:disable-next-line:typedef
  getToken(): Observable<any> {
    return this.http.get(this.url + this.csrfResource, {responseType: 'text', withCredentials: true});
  }
}
