import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

import { Contact } from 'src/app/profile/interfaces/contact';

import dataContact from '../../../assets/data/contact.json';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items!: MenuItem[];
  contacts: Contact[] = dataContact;

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
                        label: 'CV',
                        icon: 'pi pi-fw pi-home',
                        routerLink: '/'
                      },
                      {
                        label: 'Github',
                        icon: 'pi pi-fw pi-github',
                        url: this.contacts.find( github => Object.is(github.propiedad, 'Github') )?.url
                      },
                      {
                        label: 'Linkedin',
                        icon: 'pi pi-fw pi-linkedin',
                        url: this.contacts.find( linkedin => Object.is(linkedin.propiedad, 'Linkedin') )?.url
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
