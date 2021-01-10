import { NgModule } from '@angular/core';
import { CalculatorComponent } from './calculator.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CalculatorComponent,
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [CalculatorComponent]
})
export class CalculatorModule {}
