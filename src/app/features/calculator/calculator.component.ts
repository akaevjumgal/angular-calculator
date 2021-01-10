import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { DATE_FORMAT } from '../../core/enums/date.enum';
import { CalculatorSettings } from './models/calculator.model';
import { LocalStorageService } from '../../core/services/local-storage.service';

const STORAGE_TOKEN = 'calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) {}

  deposit = new FormGroup({
    byTotal: new FormControl(false),
    amount: new FormControl(undefined),
    date: new FormControl(moment().add(1, 'year').format(DATE_FORMAT.MONTH))
  });

  saving = false;

  ngOnInit() {
    const storageData = this.localStorageService.find(STORAGE_TOKEN);
    if (storageData) {
      this.deposit.setValue(
        JSON.parse(this.localStorageService.find(STORAGE_TOKEN))
      );
    }
  }

  get settings(): CalculatorSettings {
    const { byTotal, date, amount } = this.deposit.value;
    const monthDiff = Math.abs(moment().diff(moment(date), 'month'));
    const settings = new CalculatorSettings();
    settings.label = 'Calculate by monthly saving';
    settings.amountByMonth = amount * monthDiff;
    settings.description = `You are saving <b>$${amount || 0} monthly</b> to save <b>$${settings.amountByMonth}</b> by <b>${moment(date).format('MMMM YYYY')}</b>.`;
    settings.dateLabel = 'Save until';

    if (byTotal) {
      settings.amountByMonth = +(amount / monthDiff).toFixed(2);
      settings.label = 'Calculate by total amount';
      settings.description = `You are planning <b>${monthDiff} monthly</b> deposits to reach your <b>$${amount || 0}</b> goal by <b>${moment(date).format('MMMM YYYY')}</b>.`;
      settings.dateLabel = 'Reach goal by';
    }

    return settings;
  }

  previousMonth() {
    this.deposit.patchValue({
      date: moment(this.deposit.value.date).subtract(1, 'month').format(DATE_FORMAT.MONTH),
    });
  }

  nextMonth() {
    this.deposit.patchValue({
      date: moment(this.deposit.value.date).add(1, 'month').format(DATE_FORMAT.MONTH),
    });
  }

  submit() {
    this.saving = true;
    this.localStorageService.save(STORAGE_TOKEN, JSON.stringify(this.deposit.getRawValue()));
    // request emulation
    const timeout = setTimeout(() => {
      this.saving = false;
      if (!this.saving) {
        clearTimeout(timeout);
      }
    }, 1000);
  }

}
