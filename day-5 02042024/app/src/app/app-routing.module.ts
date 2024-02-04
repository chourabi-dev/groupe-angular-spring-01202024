import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { DemoCameraComponent } from './demo-camera/demo-camera.component';
import { WatcherComponent } from './watcher/watcher.component';

const routes: Routes = [
  {
    path:'one' , component:PageOneComponent
  },
  {
    path:'two' , component:PageTwoComponent
  },

  {
    path:'products', component:ProductsComponent,
    
  },
  {
    path:'cart', component:CartComponent,
    
  },
  

  {
    path:'camera', component:DemoCameraComponent,
    
  },
  
  {
    path:'watch', component:WatcherComponent,
    
  },
  



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
