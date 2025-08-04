import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Project } from './components/project/project';
import { Aboutme } from './components/aboutme/aboutme';
import { Contact } from './components/contact/contact';

export const routes: Routes = [

  {path:'', component: Home},
  {path:'project', component: Project},
  {path:'aboutme', component: Aboutme},
  {path:'contact', component: Contact}
];
