import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router, NavigationExtras } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: User;


  public id: string;
  public pass: string;
  public warn: string;

  public registerID: string;
  public registerPass: string;
  public registerRepass: string;
  public registerName: string;
  public registerLastname: string;
  public registerTel: string;
  public status: string;
  public color: string;

  constructor(private router: Router, private register: RegisterService) {

    this.user = new User();
    this.registerID = null;
    this.registerPass = null;
    this.registerRepass = null;
    this.registerName = null;
    this.registerLastname = null;
    this.registerTel = null;
  }

  ngOnInit() {
  }
  gologin(){
    this.router.navigate(['/login']);
  }

  registerNurse() {
    //console.log("click");
    if (this.registerID == null && this.registerPass == null && this.registerName == null && this.registerLastname == null && this.registerTel == null) {
      this.color = "red";
      this.status = "invalid input";
    } else {
      if (this.registerPass != this.registerRepass) {
        this.color = "red";
        this.status = "pass and repass not match";
      } else {
        this.user = new User();
        this.user.id = this.registerID;
        this.user.pass = this.registerPass;
        this.user.name = this.registerName;
        this.user.lname = this.registerLastname;
        this.user.phone = this.registerTel;

        this.register.register(this.user).subscribe(
          response => {
            let redirect = '/home';
            let a: boolean = false;
            if (response == true) {

              this.color = "green";
              this.status = "register success!"
              this.user = new User();
              this.registerID = null;
              this.registerPass = null;
              this.registerRepass = null;
              this.registerName = null;
              this.registerLastname = null;
              this.registerTel = null;




            } else {
              this.color = "red";
              this.status = "fail register"
            }
          })

      }




    }
  }

}
