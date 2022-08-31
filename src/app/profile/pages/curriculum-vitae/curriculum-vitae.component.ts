import { Component, OnInit } from '@angular/core';
import { Experience } from '../../interfaces/experience';

import dataExp from '../../../../assets/data/experience.json';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styles: [
  ]
})
export class CurriculumVitaeComponent implements OnInit {

  experiencia: Experience[] = dataExp; 
  
   

  constructor() { }

  ngOnInit(): void {

    console.log(this.experiencia)
      

  }

}
