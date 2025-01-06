import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import { ParamsDate } from '../../interfaces/params-date.inteface';

@Component({
  selector: 'app-date-selector',
  standalone: false,

  templateUrl: './date-selector.component.html',
  styleUrl: './date-selector.component.css',

  providers: [
  ]
})
export class DateSelectorComponent {

  @Output()
  public onDateSelected: EventEmitter<ParamsDate> = new EventEmitter()

  public dates: ParamsDate = {
    start_date: '',
    end_date: ''
  }

  public minDate: string = '2022-01-01';
  public maxDate: string = '2022-12-31';

  emitDates(): void {
    if (this.dates.end_date.length === 0 || this.dates.start_date.length === 0) return;
    this.onDateSelected.emit(this.dates)
  }
}


