import { Component, OnInit } from '@angular/core';

import info from '../../../../assets/data/data.json';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styles: [
  ]
})
export class CurriculumVitaeComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {

      console.log( info )

  }

}
