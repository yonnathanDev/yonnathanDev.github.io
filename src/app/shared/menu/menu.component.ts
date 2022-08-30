import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
          label: 'Perfil',
          icon: 'pi pi-fw pi-user',
          items: [{
                  label: 'Perfiles', 
                  icon: 'pi pi-fw pi-home',
                  items: [
                      {
                        label: 'Home',
                        icon: 'pi pi-fw pi-home',
                        routerLink: '/'
                      },
                      {
                        label: 'linkedin',
                        icon: 'pi pi-fw pi-github'
                      },
                      {
                        label: 'linkedin',
                        icon: 'pi pi-fw pi-linkedin',
                      },
                  ]
              }
          ]
      },
      {
          label: 'Contacto',
          icon: 'pi pi-fw pi-send',
          routerLink: 'contact'
      },
      {
        label: 'Portafolio',
        icon: 'pi pi-fw pi-book',
        routerLink: 'portafolio'
      }
  ];


  }

}
