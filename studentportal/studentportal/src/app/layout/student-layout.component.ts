import { Component } from '@angular/core';

@Component({

  selector: 'app-student',
  templateUrl: './student-layout.component.html',
  styleUrls: ['./student-layout.component.scss']

})
export class StudentLayoutComponent {

  public toggleBarIcon:boolean=true;
  constructor() {

  }
  toggle(): void {

    const self = this;
    setTimeout( () => {
      self.toggleBarIcon = !self.toggleBarIcon;

    }, 500 );

  }

}
