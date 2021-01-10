import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { ButtonDirective } from './directives/button.directive';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

@NgModule({
  declarations: [
    CardComponent,
    FormFieldComponent,
    SlideToggleComponent,
    ButtonDirective,
    DatePickerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FormsModule,
    CardComponent,
    ReactiveFormsModule,
    FormFieldComponent,
    SlideToggleComponent,
    ButtonDirective,
    DatePickerComponent
  ]
})
export class SharedModule {}
