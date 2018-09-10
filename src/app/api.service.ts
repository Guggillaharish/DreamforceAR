import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserInfo } from "./userlist";
@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private httpApi: HttpClient) {}
  ArLogin(formData) {
    return this.httpApi.post<UserInfo[]>(
      "http://localhost:8955/autorabit/userLogin",
      formData
    );
  }
}
