import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './cms/about-us/about-us.component';
import { HomeComponent } from './cms/home/home.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { InstructorLayoutComponent } from './layouts/instructor-layout/instructor-layout.component';
import { PublisherLayoutComponent } from './layouts/publisher-layout/publisher-layout.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';
import { BACKEND_ROUTES } from './routes/backend-layout-route';
import { DEFAULT_ROUTES } from './routes/default-layout-route';
import { NotfoundComponent } from './shared/notfound/notfound.component';


const routes: Routes = [
{path:'cms',component:DefaultLayoutComponent,children:DEFAULT_ROUTES},
{path:'backend',component:BackendLayoutComponent,children:BACKEND_ROUTES},
{path:'notfound',component:NotfoundComponent},
{
  path: '',
  redirectTo: '/cms/index',
  pathMatch: 'full'
},
{ path: '**', redirectTo: '/notfound' } 
];



// const routes:Routes=[
//   {path:'',redirectTo:'/cms',pathMatch:'full'},
//   {path:'',component:DefaultLayoutComponent, loadChildren:()=>import('./cms/cms.module').then(m=>m.CmsModule)},
//   {path:'**',redirectTo:'404'}
// ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
