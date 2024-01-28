import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ErrorComponent } from './pages/error/error.component';
import { CompanyComponent } from './pages/company/company.component';
import { TeamComponent } from './pages/team/team.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  // rediction
  //{ path:'', component:HomePageComponent },
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component:HomePageComponent },
  { path:'about', component:AboutPageComponent , children: [
    { path:'company', component:CompanyComponent },
    { path:'team', component:TeamComponent },
    
  ]},

  { path:'profile', component:ProfileComponent , canActivate:[ AuthGuard ] },


  { path:'login', component:LoginComponent  },


  { path:'products/details/:id', component:ProductComponent  },



  { path:'**', component:ErrorComponent } // WILD CARD
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
