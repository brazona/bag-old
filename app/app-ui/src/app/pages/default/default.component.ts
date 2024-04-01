import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  standalone: true,
  imports: [MatGridListModule, MatButtonModule],
})
export class DefaultComponent {
 version:string = environment.VERSION; 
 environment:any = environment.ENVIRONMENT;
}
