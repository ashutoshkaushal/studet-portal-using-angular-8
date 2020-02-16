/**
 * Created by mohma on 7/26/2017.
 */
import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';
import {AboutComponent} from "./about.component";

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: {
      title: 'about'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
