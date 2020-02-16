/**
 * Created by mohma on 7/26/2017.
 */
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {CommonModule} from "@angular/common";
import {StudymaterialcContentComponent} from "./studymaterialc.component";
//import {StudymaterialcContentRoutingModule} from "app/content/studymaterialc/studymaterialc-routing"; 
import { StudymaterialcContentRoutingModule} from "./studymaterialc-routing";
import {Ng2SmartTableModule} from "ng2-smart-table";


@NgModule({
  imports: [
    FormsModule, ReactiveFormsModule,
    CommonModule,
    StudymaterialcContentRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [ StudymaterialcContentComponent],
  providers: [  ]
})
export class StudymaterialcContentModule { }
