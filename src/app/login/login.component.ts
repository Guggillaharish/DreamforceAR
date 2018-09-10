import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";
import { UserInfo } from "../userlist";
import { map } from "rxjs/operators";
declare var particlesJS: any;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  response;
  payload = {};
  email = "";
  password = "";

  loginForm: FormGroup;
  constructor(private AuthSrvice: ApiService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    });
  }
  Login() {
    this.AuthSrvice.ArLogin(this.loginForm.value).subscribe(
      data => {
        this.response = data["accessToken"];
        if (this.response) {
          localStorage.setItem(
            "token",
            data["tokenType"] + " " + this.response
          );
          this.router.navigate(["pages/dashboard"]);
        } else {
          alert("wrong credentials");
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
