import { Breakpoints } from '@angular/cdk/layout';
import { IScreenSize } from 'src/app/shared/interfaces/constants/screensize';

export const ScreenSize: IScreenSize[] = [ 
    {
        id: Breakpoints.Small,
        size: "Small",
        type_screen: 1
    },
    {
        id: Breakpoints.XSmall,
        size: "XSmall",
        type_screen: 1
    },
    {
        id: Breakpoints.Medium,
        size: "Medium",
        type_screen: 2
    },
    {
        id: Breakpoints.Large,
        size: "Large",
        type_screen: 3
    },
    {
        id: Breakpoints.XLarge,
        size: "XLarge",
        type_screen: 3
    }
]