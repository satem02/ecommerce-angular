import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  })
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  errorMessage;
  ngOnInit() {
  }
  giris() {
    let username = "user";
    let password = "123";
    if (this.formLogin.value.username == username && this.formLogin.value.password == password) {
      localStorage.setItem("loginInfo", "islogin");
      let returURL = this.activatedRoute.snapshot.queryParamMap.get("returnURL");
      if (returURL) this.router.navigate([returURL]);
      else this.router.navigate(["/admin"]);
      //this.router.navigate(["/admin"]);
    }
    else this.errorMessage = "Kullanıcı Adı veya Şifre Hatalı";


  }
}
