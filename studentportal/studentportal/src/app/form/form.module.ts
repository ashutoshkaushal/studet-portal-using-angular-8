/**
 * Created by mohma on 7/26/2017.
 */
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import { FormComponent} from './form.component';
import { FormService} from './form.service';
import { FormRoutingModule} from './form-routing';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ActivatedRoute , Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { HelperService } from '../services/helper.service';
import { Option, Question, Quiz, QuizConfig } from '../models/index';
import { CommonModule} from '@angular/common';


@NgModule({
  imports: [
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule
  ],
  declarations: [ FormComponent],
  providers: [ FormService , QuizService ]
})

export class FormModule   {







}
