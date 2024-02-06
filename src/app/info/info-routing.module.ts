import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout.component';
import { AdsPageComponent } from './pages/ads-page/ads-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { UsPageComponent } from './pages/us-page/us-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';

const routes: Routes = [
  {
    path:'', 
    component: LayoutPageComponent,
    children: [
      { path: 'ads', component: AdsPageComponent },
      { path: 'contact', component: ContactPageComponent },
      { path: 'us', component: UsPageComponent },
      { path: 'blog', component: BlogPageComponent },
      { path: 'principal', component: PrincipalPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
