import { BreakpointObserver, BreakpointState, Breakpoints } from "@angular/cdk/layout";
import { Injectable, OnDestroy, OnInit} from "@angular/core";
import { Subject, takeUntil } from "rxjs";



@Injectable({
    providedIn: 'root'
  })

export abstract class GenericComponent implements OnInit, OnDestroy{

    destroyed = new Subject<void>();
    currentScreenSize: string = '';
    
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
        .observe([Breakpoints.HandsetPortrait])
        .subscribe((state: BreakpointState) => {
            if (state.matches) {
                console.log(
                'This is the Handset Portrait point at max-width: 599.98 px and portrait orientation.'
                );
            }
        });
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
                    this.currentScreenSize = this.displayNameMap.get(query) ??  'Unknown';
                    console.log(this.currentScreenSize)

                    
                }
            }
        });
        
    }

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
}