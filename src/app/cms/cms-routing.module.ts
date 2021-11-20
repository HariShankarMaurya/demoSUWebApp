import{NgModule}from '@angular/core';
import{Router, RouterModule,Routes}from '@angular/router';
import { DefaultLayoutComponent } from '../layouts/default-layout/default-layout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EventsComponent } from './events/events.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TermsComponent } from './terms/terms.component';
import { WhyStudyudaanComponent } from './why-studyudaan/why-studyudaan.component';
const routes:Routes=[
    {path:'index',component:HomeComponent},
    {path:'about-us',component:AboutUsComponent},
    {path:'contact-us',component:ContactUsComponent},
    {path:'faq',component:FaqComponent},
    {path:'events',component:EventsComponent},
    {path:'privacy-policy',component:PrivacyPolicyComponent},
    {path:'shipping',component:ShippingComponent},
    {path:'terms-and-conditions',component:TermsComponent},
    {path:'why-studyudaan',component:WhyStudyudaanComponent},
    {path:'shopping-cart',component:ShoppingCartComponent} ,
    {path:'cancellation',component:CancellationComponent},
    {path:'category-details/:id',component:CategoryDetailsComponent},
    {path:'book-details/:id',component:BookDetailsComponent}
];
@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]
})
export class cmsRoutingModule{}