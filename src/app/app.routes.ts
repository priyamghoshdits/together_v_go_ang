import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {HowItWorksComponent} from "./pages/how-it-works/how-it-works.component";
import {FaqsComponent} from "./pages/faqs/faqs.component";
import {CitiesComponent} from "./pages/cities/cities.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";

export const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'about-us' , component:AboutUsComponent},
  {path:'how-it-works' , component:HowItWorksComponent},
  {path:'contact-us' , component:ContactUsComponent},
  {path:'cities' , component:CitiesComponent},
  // {path:'services' , component:ServiceComponent},
  // {path:'service-details/:id' , component:ServiceDetailsComponent},
  {path:'faqs' , component:FaqsComponent},
  // {path:'login' , component:LoginComponent}

];
