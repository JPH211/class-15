import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BobComponent } from './about/bob/bob.component';
import { SusanComponent } from './about/susan/susan.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: "full"},
  {path: 'home'   , component: HomeComponent},
  {path: 'about'  , component: AboutComponent, children:
  [
    {path: 'bob', component: BobComponent},
    {path: 'susan', component: SusanComponent}
  ]
  },
  {path: 'contact', component: ContactComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
