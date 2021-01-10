import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  @Input()
  label = '';

  @Input()
  prefix = '$';

  @Input()
  className = '';

  constructor() { }

  ngOnInit(): void {
  }

}
