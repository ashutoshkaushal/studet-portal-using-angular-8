/**
 * Created by mohma on 7/26/2017.
 */
import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';
import { StudymaterialcContentComponent} from "./studymaterialc.component";

const routes: Routes = [
  {
    path: '',
    component: StudymaterialcContentComponent,
    data: {
      title: 'Studymaterialc'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudymaterialcContentRoutingModule {}
