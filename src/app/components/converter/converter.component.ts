import {Component, OnDestroy, OnInit} from '@angular/core';
import {filter} from 'rxjs/operators';
import {ICurrency} from '../../model/types';
import {DataApiService} from '../../services/data-api.service';
import {SubSet} from '../../services/subset';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit, OnDestroy {
  private subs = new SubSet();
  currenciesList: { data: ICurrency[]; index: number };
  currenciesListCalc: { data: ICurrency[]; index: number };
  newValue: number;
  currenciesData: ICurrency[];
  valutaConv: ICurrency;
  valutaCalcConv: ICurrency;
  calculatedValue: number;
  indexValutaCalc = 0;
  indexValuta = 0;


  constructor(
    private dataApiService: DataApiService,
  ) {
  }

  ngOnInit(): void {
    this.subs.add = this.dataApiService.filtersData.pipe(filter(data => !!data)).subscribe(
      {
        next: data => {
          this.currenciesData = data;
          if (this.currenciesData) {
            this.currenciesList = {data, index: 0};
            this.currenciesListCalc = {data, index: 0};
            this.valutaCalcConv = this.currenciesData[0];
            this.valutaConv = this.currenciesData[0];
            this.newValue = this.currenciesData[0].Nominal;
            this.calcConvertation();
          }
        }
      }
    );
  }

  selectedCurrent(e: ICurrency): void {
    this.valutaConv = this.currenciesData.filter(el => el.CharCode === e.CharCode)[0];
    this.indexValuta = this.currenciesData.map(el => el.CharCode).indexOf(this.valutaConv.CharCode);
    this.calcConvertation();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  selectedCalcCurrent(e: ICurrency): void {
    this.valutaCalcConv = this.currenciesData.filter(el => el.CharCode === e.CharCode)[0];
    this.indexValutaCalc = this.currenciesData.map(el => el.CharCode).indexOf(this.valutaCalcConv.CharCode);
    this.calcConvertation();
  }

  calcConvertation(): void {
    this.calculatedValue = (this.newValue * this.valutaConv.Value) / (this.valutaCalcConv.Nominal * this.valutaCalcConv.Value);
  }

  switchConvertion(): void {
    const tmpIndex = this.indexValutaCalc;
    this.indexValutaCalc = this.indexValuta;
    this.indexValuta = tmpIndex;
    const tmp = this.valutaConv;
    this.valutaConv = this.valutaCalcConv;
    this.valutaCalcConv = tmp;
    console.log(this.indexValutaCalc, this.indexValuta);
    this.currenciesList = {data: this.currenciesData, index: this.indexValuta};
    this.currenciesListCalc = {data: this.currenciesData, index: this.indexValutaCalc};
    this.calcConvertation();
  }

  onChangeValue(): void {
    this.calcConvertation();
  }
}
