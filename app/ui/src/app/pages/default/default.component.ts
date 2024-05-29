import { Component, Injectable, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { GenericComponent } from 'src/app/shared/components/generic.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';





@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  standalone: true,
  imports: [
    MatGridListModule, 
    MatButtonModule, 
    FlexLayoutModule, 
    MatToolbarModule,
    CommonModule,
    MatIconModule
  ],
})
export class DefaultComponent extends GenericComponent{
 version:string = environment.VERSION; 
 environment:any = environment.ENVIRONMENT;
 sidebarList: string[] = ["HOME", "TUTORIAIS", "CONTATOS"]
 sidebarExpan: boolean = true;
  constructor(
    public router: Router, responsive: BreakpointObserver  
    ) { 
      super(responsive);
  }
  page_login(){
    this.router.navigate(['/login']);
  }
  menuSidebar(){
    if(this.currentScreenSize.type_screen != 0){
      return;
    }
    this.sidebarExpan = !this.sidebarExpan; 
  }
}
