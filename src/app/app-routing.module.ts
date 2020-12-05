import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoldHomeComponent } from './gold-home/gold-home.component';
import { GoldAboutComponent } from './gold-about/gold-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
{
  path: 'home',
  component: GoldHomeComponent
},
{
  path: 'about',
  component: GoldAboutComponent
},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
