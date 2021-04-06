import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
const data=[
  MatButtonModule,
  MatTableModule
];
@NgModule({
  imports: data,
  exports: data
})
export class MaterialModule{}
