import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsPageComponent } from './info/pages/us-page/us-page.component';
import { AdsPageComponent } from './info/pages/ads-page/ads-page.component';
import { BlogPageComponent } from './info/pages/blog-page/blog-page.component';
import { ContactPageComponent } from './info/pages/contact-page/contact-page.component';

const routes: Routes = [
  {
    path:'info', 
    loadChildren: () => import('./info/info.module').then(m=> m.InfoModule),
  },
  {
    path:'', 
    redirectTo: 'info/principal',
    pathMatch: 'full'
  },
  {
    path:'**', 
    redirectTo: 'info/principal',
  },
  { path: 'info/us', component: UsPageComponent },
  { path: 'info/ads', component: AdsPageComponent },
  { path: 'info/blog', component: BlogPageComponent },
  { path: 'info/contact', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
