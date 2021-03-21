import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  username: string;

  user: any;

  submitHandler() {
    this.api.userSignUp(this.username, this.password).subscribe((data: any) => {
      console.log(data);
    })
  }

  getUser() {
    this.api.getUserInfo().subscribe(data => {
      console.log('debugging current user data: ', data);
      this.user = data;
    });
  }

  updateUser() {
    this.api.updateUserInfo().subscribe(data => {
      console.log(data);
    });
  }

  handleFileInput(event) {
    const file = event.target.files[0];
    console.log('debug event: ', event.target.files[0]);
    const fileName = file.name;
    const fileType = file.type;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result.toString();
      const base64string = result.split('base64,').pop();
      console.log('debugging base64 string: ', base64string);
      this.api.uploadFile(base64string, fileType, fileName).subscribe(data => {
        console.log('debugging file ID');
      });
    };
  }

  constructor(private api: ApiService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.api.getToken().subscribe(token => console.log('debugging token: ', token));
    this.getUser();
  }
}
