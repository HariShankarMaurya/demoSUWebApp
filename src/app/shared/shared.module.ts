import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendHeaderComponent } from './backend-header/backend-header.component';
import { BackendFooterComponent } from './backend-footer/backend-footer.component';
import { StudentHeaderComponent } from './student-header/student-header.component';
import { StudentFooterComponent } from './student-footer/student-footer.component';
import { InstructorHeaderComponent } from './instructor-header/instructor-header.component';
import { InstructorFooterComponent } from './instructor-footer/instructor-footer.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DefaultHeaderComponent,
    DefaultFooterComponent,
    BackendHeaderComponent,
    BackendFooterComponent,
    StudentHeaderComponent,
    StudentFooterComponent,
    InstructorHeaderComponent,
    InstructorFooterComponent,
    NotfoundComponent,
 
  ],
  exports:[
    DefaultHeaderComponent,
    DefaultFooterComponent,
    BackendHeaderComponent,
    BackendFooterComponent,
    StudentHeaderComponent,
    StudentFooterComponent,
    InstructorHeaderComponent,
    InstructorFooterComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule
  ]

})
export class SharedModule { }
