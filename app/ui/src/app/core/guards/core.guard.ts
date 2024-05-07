import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Injectable()
export class coreGuard implements CanActivate, CanLoad {

  isValid:boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {
    return this.verificarAcesso();
  }

  private verificarAcesso(){
    this.isValid = true;
    debugger
    if (!this.authService.isAthentication()) {
        this.isValid = false;
        this.router.navigate(['/default']);
    } 
    return this.isValid;
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    return this.verificarAcesso();
  }

}