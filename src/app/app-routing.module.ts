import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CompletedComponent } from './completed/completed.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch:'full'
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "details/:id", component: ProductDetailsComponent
  },
  {
    path: "completed", component: CompletedComponent
  },
  {
    path: "contact", component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
