import { NgModule } from '@angular/core';
import { } from '@angular/animations';
import {} from '@angular/cdk';

import {
    MdSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
} from '@angular/material';


const asList = [
    MdSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
];

@NgModule({
    imports: asList,
    exports: asList
})
export class MdCustomModule {}
