import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LocationStrategy, CommonModule, HashLocationStrategy} from '@angular/common';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FileSelectDirective } from 'ng2-file-upload';
import { ActivatedRoute , Router } from '@angular/router';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { SafePipeModule } from 'safe-pipe';


// Routing Module
import { AppRoutingModule } from './app.routing';
import { FullLayoutComponent} from './layout/full-layout.component';
import { StudentLayoutComponent} from './layout/student-layout.component';
import {Ng2AutoBreadCrumb} from 'ng2-auto-breadcrumb';
import {Ng2NewsListComponent} from './components/ng2-newslist/ng2newslist.component';
import { QuestionComponent } from './question/question.component';



const appRoutes: Routes = [

];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    SafePipeModule,
    CommonModule,
    Ng2AutoBreadCrumb
  ],
  declarations: [
    FullLayoutComponent,
    StudentLayoutComponent,
    AppComponent,
    QuestionComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
