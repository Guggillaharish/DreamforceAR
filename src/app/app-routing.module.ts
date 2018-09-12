import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";

import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent
} from "@nebular/auth";

const routes: Routes = [
  { path: "pages", loadChildren: "app/pages/pages.module#PagesModule" },
  { path: "login", component: LoginComponent },

  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "pages" }
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
