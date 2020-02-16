/**
 * Created by mohma on 7/26/2017.
 */
import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';
import { StudymaterialbContentComponent } from "./studymaterialb.component";

const routes: Routes = [
  {
    path: '',
    component: StudymaterialbContentComponent,
    data: {
      title: 'Form'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudymaterialbContentRoutingModule {}
