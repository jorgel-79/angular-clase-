import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoreComponent} from './more/more.component'
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"more/:task",component:MoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
