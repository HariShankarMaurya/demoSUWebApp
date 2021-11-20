import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
// import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';
// import { InstructorLayoutComponent } from './layouts/instructor-layout/instructor-layout.component';
// import { PublisherLayoutComponent } from './layouts/publisher-layout/publisher-layout.component';
import{SharedModule}from './shared/shared.module';
import{CmsModule}from './cms/cms.module';
@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    BackendLayoutComponent,

     // StudentLayoutComponent,
    // InstructorLayoutComponent,
    // PublisherLayoutComponent    
  ],
  imports: [
    BrowserModule,
    SharedModule,   
    CmsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
