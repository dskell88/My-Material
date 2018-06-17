import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatRadioModule],
  exports: [MatButtonModule, MatToolbarModule, MatRadioModule],
})
export class MaterialModule { }