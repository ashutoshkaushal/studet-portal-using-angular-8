/**
 * Created by mohma on 7/26/2017.
 */
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {CommonModule} from "@angular/common";
import {StudymaterialaContentComponent} from "./studymateriala.component";
import {StudymaterialaContentRoutingModule} from "./studymateriala-routing";
import {ChartsModule} from "ng2-charts";


@NgModule({
  imports: [
    FormsModule, ReactiveFormsModule,
    CommonModule,
    StudymaterialaContentRoutingModule,
    ChartsModule
  ],
  declarations: [ StudymaterialaContentComponent],
  providers: [  ]
})
export class StudymaterialaContentModule { }
