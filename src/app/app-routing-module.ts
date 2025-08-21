import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

const routes: Routes = [
  { path: '', component: Home, data: { animation: 'Home' } },
  { path: 'about', component: About, data: { animation: 'About' } },
  { path: 'projects', component: Projects, data: { animation: 'Projects' } },
  { path: 'contact', component: Contact, data: { animation: 'Contact' } },
  { path: '**', redirectTo: '' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
