/**
 * Created by mohma on 7/26/2017.
 */
import {Ng2ListViewCRUDProperty} from "ng2-listview-crud";
import { Component, OnInit, ViewChild} from '@angular/core';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
//import { FormRoutingModule} from './form-routing';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ActivatedRoute , Router } from '@angular/router';


@Component({
  templateUrl: './main.component.html',
  selector:'widget-main'
})
export class MainWidgetComponent implements OnInit {


  /* tslint:disable-next-line:max-line-length
  constructor( private formBuilder: FormBuilder, private httpClient: HttpClient , private route: ActivatedRoute, private router: Router) { }*/


  public successText="Successful";
  public warningText="Warning";
  public dangerText="Danger";
  public successColor="#8ad919";
  public warningCOlor="#ffb53e";
  public dangerColor="#f9243f";
  public fontColor="#ececec";

  //Timeline Related
  public completeListener(item){
    console.log(item);
    return true;
  }
  public timelineData:Array<Object> =[
    {
      title:"Step 1",
      icon:'<i class="fa fa-home"></i>',
      content:"Hello World",
      complete:true
    },
    {
      title:"Step 2",
      icon:'<i class="fa fa-pencil"></i>',
      content:"Welcome World",
      complete:false
    }
  ];

  //News Component
  public newsList:Array<Object> =[
    {
      large:"30",
      small:"Jun",
      link:"http://www.aebiss.com",
      title:"AEBISS",
      content:"Fullstack development, IoT, Blockchain related services in the U.A.E"
    },
    {
      large:"1",
      small:"Jul",
      link:"http://www.tayar.ae",
      title:"Tayar",
      content:"One device that let you control any electrical device at home"
    },
    {
      large:"1",
      small:"Jul",
      link:"http://www.wavex.io",
      title:"WaveX",
      content:"Blockchain based electricity trading platform"
    }
  ]

  public listView:Ng2ListViewCRUDProperty= {
    add:true,//Adding possible
    remove:true,//Removing elements possible
    edit:true,//editing possible
    dataIsObject:true,
    path:["name","first"],
    label:"CRUD ListView",
    headingBackgroundColor:"#3752ff",
    headingFontColor:"#ececec",
    icon:"fa fa-cogs",
    onDelete:function(value){
      console.log("Deleting Value: "+JSON.stringify(value));
      return true;
    },
    onUpdate:function(value,newValue){
      console.log("Editing Value: "+JSON.stringify(value)+" New Value:"+newValue);
      return true;
    },
    onSearch:function(value){
      console.log(value)
    },
    onAdd:function(value){
      console.log("Adding Value: "+JSON.stringify(value));
      return true;
    },
    onSelect:function(value){
      console.log(JSON.stringify(value));
    },
    onSearchChange:function(value){
      console.log(value)
    }
  };

  //In this specific example the field name.first is displayed in the list
  public listItems:Array<Object>=
    [
      {name:{first:"Hello",last:"World"},count:2},
      {name:{first:"Hello2",last:"World"},count:2}
    ];

  constructor( private formBuilder: FormBuilder, private httpClient: HttpClient , private route: ActivatedRoute, private router: Router) {
    let self=this;
    setTimeout(function(){
      self.timelineData.push({
        title:"Step 3",
        icon:'<i class="fa fa-remove"></i>',
        content:"Bye World",
        complete:false
      });
    },5000);
  }

  public arraysListViewProperty:Ng2ListViewCRUDProperty= {
    add:true,//Adding possible
    remove:true,//Removing elements possible
    edit:true,//editing possible
    dataIsObject:false,
    path:[],
    label:"CRUD ListView with Arrays",
    headingBackgroundColor:"#3752ff",
    headingFontColor:"#ececec",
    icon:"fa fa-cogs",
    onDelete:function(value){
      console.log("Deleting Value: "+JSON.stringify(value));
      return true;
    },
    onUpdate:function(value,newValue){
      console.log("Editing Value: "+JSON.stringify(value)+" New Value:"+newValue);
      return true;
    },
    onSearch:function(value){
      console.log(value)
    },
    onAdd:function(value){
      console.log("Adding Value: "+JSON.stringify(value));
      return true;
    },
    onSelect:function(value){
      console.log(JSON.stringify(value));
    },
    onSearchChange:function(value){
      console.log(value)
    }
  };

  //In this specific example the field name.first is displayed in the list
  public crudArray:Array<Object>=
    [
      "Apple","Orange","Banana"
    ];




  SERVER_URL =  'http://localhost:4000/api/addquestion';
  questionForm: FormGroup;
  response;
  email;




  ngOnInit() {

    this.questionForm = this.formBuilder.group({
      question: [''],
      category_name:  [''],
      answer:  [''],
      option_one:  [''],
      option_two:  [''],
      option_three:  [''],

    });


  }


  onSubmit() {

    const formData = new FormData();
    formData.append('question', this.questionForm.get('question').value);
    formData.append('category_name', this.questionForm.get('category_name').value);
    formData.append('answer', this.questionForm.get('answer').value);
    formData.append('option_one', this.questionForm.get('option_one').value);
    formData.append('option_two', this.questionForm.get('option_two').value);
    formData.append('option_three', this.questionForm.get('option_three').value);

    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      (res) =>  alert('Question Added Successfully') ,
      (err) => console.log(err)
    );

    //console.log(this.response);


  }


  getResponse(){

    alert('Question Added Successfully');

  }







}


