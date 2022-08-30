import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './profile/pages/contact/contact.component';
import { CurriculumVitaeComponent } from './profile/pages/curriculum-vitae/curriculum-vitae.component';
import { PortafolioComponent } from './profile/pages/portafolio/portafolio.component';

const routes: Routes = [

  {
    path: '',
    component: CurriculumVitaeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'portafolio',
    component: PortafolioComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
