/**
 * Created by mohma on 7/26/2017.
 */
import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';
import {StudymaterialaContentComponent} from "./studymateriala.component";

const routes: Routes = [
  {
    path: '',
    component: StudymaterialaContentComponent,
    data: {
      title: 'Studymateriala'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudymaterialaContentRoutingModule {}
