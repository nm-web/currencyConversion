import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ICurrency, IExchangeRates} from '../model/types';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  exchangeRates = new BehaviorSubject<IExchangeRates | null>(null);
  filtersData = new BehaviorSubject<ICurrency[]>(null);

  constructor(
    private http: HttpClient,
  ) {
    this.loadData();
  }

  loadData(): void {
    this.http.get('https://www.cbr-xml-daily.ru/daily_json.js')
      .subscribe({
        next: (data: any) => {
          const exchangeRates = data as IExchangeRates;
          this.exchangeRates.next(exchangeRates);
          const value = Object.values(exchangeRates.Valute);
          this.filtersData.next(value);
        },
        error: (err) => {
          this.exchangeRates.next(null);
          console.log('Невозможно загрузить данные');
        }
      });
  }


}
