import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumVitaeComponent } from './pages/curriculum-vitae/curriculum-vitae.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ContactComponent } from './pages/contact/contact.component';



@NgModule({
  declarations: [
    CurriculumVitaeComponent,
    PortafolioComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
