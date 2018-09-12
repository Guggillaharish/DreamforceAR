import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { ThemeModule } from "../@theme/theme.module";
import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";
import { NgSidebarComponent } from "../ng-sidebar/ng-sidebar.component";

import { MaterialModule } from "./material.module";
<<<<<<< HEAD
import { SelectOrgsComponent } from '../select-orgs/select-orgs.component';
=======
>>>>>>> 8c80b38244e6cb70599b858ed3eb634489a19bf7
const PAGES_COMPONENTS = [PagesComponent];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
    MaterialModule
  ],
<<<<<<< HEAD
  declarations: [...PAGES_COMPONENTS, NgSidebarComponent, SelectOrgsComponent]
=======
  declarations: [...PAGES_COMPONENTS, NgSidebarComponent]
>>>>>>> 8c80b38244e6cb70599b858ed3eb634489a19bf7
})
export class PagesModule {}
