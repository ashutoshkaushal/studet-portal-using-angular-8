import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullLayoutComponent} from './layout/full-layout.component';
import {StudentLayoutComponent} from './layout/student-layout.component';

// Layouts
export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/student/form',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: 'form',
    loadChildren: './form/form.module#FormModule'
  },
  {
    path: 'programming',
    loadChildren: './programming/programming.module#ProgrammingModule'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        data:{
          title2: 'Dashboard'
        }
      },
      // {
      //   path: 'form',
      //   loadChildren: './form/form.module#FormModule'
      // },
      {
        path: 'widget',
        children:[
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'widget/main'
          },
          {
            path: 'main',
            loadChildren: './widgets/main/main.module#MainWidgetModule'
          },
          {
            path: 'table',
            loadChildren: './widgets/tables/tables.module#TablesWidgetModule'
          },
          {
            path: 'chart',
            loadChildren: './widgets/charts/charts.module#ChartsWidgetModule'
          }
        ]
      }

    ]
  },
  {
    path: 'student',
    component: StudentLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'form',
        loadChildren: './form/form.module#FormModule'
      },
      {
        path: 'programming',
        loadChildren: './programming/programming.module#ProgrammingModule'
      },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
      },
      {
        path: 'content',
        children:[
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'content/studymateriala'
          },
          {
            path: 'studymateriala',
            loadChildren: './content/studymateriala/studymateriala.module#StudymaterialaContentModule'
          },
          {
            path: 'studymaterialb',
            loadChildren: './content/studymaterialb/studymaterialb.module#StudymaterialbContentModule'
          },
          {
            path: 'studymaterialc',
            loadChildren: './content/studymaterialc/studymaterialc.module#StudymaterialcContentModule'
          },
         
        ]
      }


    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
