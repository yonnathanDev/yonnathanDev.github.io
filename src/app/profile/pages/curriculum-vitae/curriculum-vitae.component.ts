import { Component, OnInit } from '@angular/core';

import { Experience } from '../../interfaces/experience';
import { Contact } from '../../interfaces/contact';
import { PersonalInformation } from '../../interfaces/personal-information';
import { Skill } from '../../interfaces/skill';

import dataExp from '../../../../assets/data/experience.json';
import dataPersonalInformation from '../../../../assets/data/personalInformation.json';
import dataContact from '../../../../assets/data/contact.json';

import dataSkill from '../../../../assets/data/skill.json';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styles: [
  ]
})
export class CurriculumVitaeComponent implements OnInit {

  experiencia: Experience[] = dataExp;
  personalInformation: PersonalInformation = dataPersonalInformation;
  contacts: Contact[] = dataContact;
  skills: Skill[] = dataSkill;

  constructor() { }

  ngOnInit(): void {

    console.log(this.contacts );
      

  }

}
