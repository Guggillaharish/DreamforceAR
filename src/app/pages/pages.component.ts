import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
  <ngx-ng-sidebar></ngx-ng-sidebar>
  <router-outlet></router-outlet>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
