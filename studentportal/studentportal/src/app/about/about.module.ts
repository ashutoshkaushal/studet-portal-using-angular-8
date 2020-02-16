/**
 * Created by mohma on 7/26/2017.
 */
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import { AboutComponent} from './about.component';
import { AboutService} from './about.service';
import { AboutRoutingModule} from './about-routing';
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
    AboutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule
  ],
  declarations: [ AboutComponent],
  providers: [ AboutService , QuizService ]
})

export class AboutModule   {







}
