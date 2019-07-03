import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  constructor() { }

  items = [
    { name: 'Dashboard', component: '/dashboard'},
    { name: 'Devices', component: '/devices'}
  ];

  header = 'SmartHome';

}
