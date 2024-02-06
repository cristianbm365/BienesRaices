import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { AdsPageComponent } from './pages/ads-page/ads-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout.component';
import { UsPageComponent } from './pages/us-page/us-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';


@NgModule({
  declarations: [
    AdsPageComponent,
    BlogPageComponent,
    ContactPageComponent,
    LayoutPageComponent,
    UsPageComponent,
    PrincipalPageComponent,
  ],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
