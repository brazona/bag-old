import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  protected env = environment;
  constructor(
    public router: Router
    ) { 

  }
}
  

