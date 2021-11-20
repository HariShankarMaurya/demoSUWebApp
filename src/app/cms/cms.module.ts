import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import{cmsRoutingModule}from '../cms/cms-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component'
import{SharedModule}from '../shared/shared.module';
import { WhyStudyudaanComponent } from './why-studyudaan/why-studyudaan.component';
import { EventsComponent } from './events/events.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FaqComponent } from './faq/faq.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CancellationComponent } from './cancellation/cancellation.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    WhyStudyudaanComponent,
    EventsComponent,
    TermsComponent,
    PrivacyPolicyComponent,
    CategoryDetailsComponent,
    ShoppingCartComponent,
    ShippingComponent,
    FaqComponent,
    TrackOrderComponent,
    BookDetailsComponent,
    CancellationComponent,
  ],
  imports: [
    CommonModule,
    cmsRoutingModule,
    SharedModule

  ]
})
export class CmsModule { }
