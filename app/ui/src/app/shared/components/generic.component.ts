import { BreakpointObserver, BreakpointState, Breakpoints } from "@angular/cdk/layout";
import { Injectable, OnDestroy, OnInit, OnChanges, SimpleChanges} from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { ScreenSize } from "../constants/screensize";
import { query } from "@angular/animations";
import { IScreenSize } from "../interfaces/constants/screensize";




@Injectable({
    providedIn: 'root'
  })

export abstract class GenericComponent implements OnInit, OnDestroy{

    destroyed = new Subject<void>();
    //currentScreenSize: Object = new Object;
    currentScreenSize: IScreenSize = {id: '', size: '', type_screen: 0};
    currentBreakpoints: string = "";
    isHandPortrait: boolean = false;
    
    // Create a map to display breakpoint names for demonstration purposes.
    displayNameMap = new Map([
        [Breakpoints.XSmall, 'XSmall'],
        [Breakpoints.Small, 'Small'],
        [Breakpoints.Medium, 'Medium'],
        [Breakpoints.Large, 'Large'],
        [Breakpoints.XLarge, 'XLarge'],
    ]);
    constructor(public responsive: BreakpointObserver) {    
    }
    ngOnInit() {
        
        this.responsive
        .observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
            Breakpoints.XLarge,
        ])
        .pipe(takeUntil(this.destroyed))
        .subscribe(result => {
            for (const query of Object.keys(result.breakpoints)) {
                if (result.breakpoints[query]) {
                    this.currentBreakpoints = query.toString();
                }
            }
            console.log(this.currentScreenSize);
            Array.from(ScreenSize.entries()).forEach(
                
                entry =>  { 
                    if (entry[1].id.includes(this.currentBreakpoints)){
                            this.currentScreenSize = entry[1];
                        }
                    }
            );    
        });
           
    }

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
}