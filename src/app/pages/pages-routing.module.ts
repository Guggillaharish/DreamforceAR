import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NotFoundComponent } from "./miscellaneous/not-found/not-found.component";
<<<<<<< HEAD
import { SelectOrgsComponent } from '../select-orgs/select-orgs.component';
=======
>>>>>>> 8c80b38244e6cb70599b858ed3eb634489a19bf7

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
<<<<<<< HEAD
        path: "select-orgs",
        component: SelectOrgsComponent
      },

=======
        path: "tables",
        loadChildren: "./tables/tables.module#TablesModule"
      },
      {
        path: "miscellaneous",
        loadChildren: "./miscellaneous/miscellaneous.module#MiscellaneousModule"
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
>>>>>>> 8c80b38244e6cb70599b858ed3eb634489a19bf7
      {
        path: "**",
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
