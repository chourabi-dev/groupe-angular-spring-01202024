import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  // SERVICE ROUTER => INJECTION SERVICE
  constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      // ...

      // HTTP SERVER
      // API CHECK AUTH 

      const condition = true;
     if(condition){
        return true;
     }else{
      this.router.navigateByUrl('/login'); 
      return false;
     }
  }
  
}
