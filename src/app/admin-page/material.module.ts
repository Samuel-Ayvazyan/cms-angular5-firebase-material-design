import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [

    ],
    imports: [
        MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule
    ],
    exports: [
        MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule
    ]
  })
  export class MaterialModule { }