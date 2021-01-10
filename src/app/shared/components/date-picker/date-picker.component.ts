import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Input()
  className = '';

  @Input()
  label = '';

  @Output()
  previous = new EventEmitter<string>();

  @Output()
  next = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onPrevious() {
    this.previous.emit();
  }

  onNext() {
    this.next.emit();
  }

}
