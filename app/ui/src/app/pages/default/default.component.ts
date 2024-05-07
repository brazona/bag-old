import { Component} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { GenericComponent } from 'src/app/shared/components/generic.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatButtonModule, FlexLayoutModule],
})
export class DefaultComponent extends GenericComponent{
 version:string = environment.VERSION; 
 environment:any = environment.ENVIRONMENT;

  constructor(
    public router: Router, responsive: BreakpointObserver  
    ) { 
      super(responsive);
  }
  page_login(){
    this.router.navigate(['/login']);
  }
}
