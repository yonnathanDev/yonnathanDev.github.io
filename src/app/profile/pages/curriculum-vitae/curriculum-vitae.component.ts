import { Component, OnInit } from '@angular/core';

import { Experience } from '../../interfaces/experience';
import { Contact } from '../../interfaces/contact';

import dataExp from '../../../../assets/data/experience.json';
import dataContact from '../../../../assets/data/contact..json'

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styles: [
  ]
})
export class CurriculumVitaeComponent implements OnInit {

  experiencia: Experience[] = dataExp;
  contact: Contact = dataContact;
   

  constructor() { }

  ngOnInit(): void {

    console.log(this.contact)
      

  }

}
