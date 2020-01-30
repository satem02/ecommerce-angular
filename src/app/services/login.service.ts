import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }
  isLogin(n,s):boolean{
    //alert(n+"---"+s);
    let loginInfo = localStorage.getItem("loginInfo");
    if (loginInfo) return true;
    else {
      this.router.navigate(["/login"],{queryParams:{returnURL:s}});
      return false;
    }
  }
}
