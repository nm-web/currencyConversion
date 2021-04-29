import {Component, Input, OnInit} from '@angular/core';
import {ICurrency} from '../../model/types';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  @Input() currency: ICurrency;
  difference: number;
  isIncrease = true;
  base = true;
  valuta = 'RUB';

  constructor() {
  }

  ngOnInit(): void {
    this.increaseCurse(this.currency);
  }

  increaseCurse(currency: ICurrency): void {
    const diff = currency.Value - currency.Previous;
    this.difference = Math.abs(diff);
    diff > 0 ? this.isIncrease = true : this.isIncrease = false ;
  }



}
