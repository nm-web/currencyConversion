import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ICurrency, ICurrencyList, IExchangeRates} from '../../model/types';
import {DataApiService} from '../../services/data-api.service';
import {SubSet} from '../../services/subset';

@Component({
  selector: 'app-list-currencies',
  templateUrl: './list-currencies.component.html',
  styleUrls: ['./list-currencies.component.scss']
})
export class ListCurrenciesComponent implements OnInit, OnDestroy {
  @ViewChild('searchBox', {static: true}) searchBox: ElementRef;
  currencies: ICurrency[];
  private subs = new SubSet();
  search = '';

  constructor(
    private dataApiService: DataApiService,
  ) {
  }

  ngOnInit(): void {
    this.subs.add = this.dataApiService.filtersData.pipe(filter(data => !!data)).subscribe(
      {
        next: data => {
          this.currencies = data;
        }
      }
    );
    this.initSearch();
  }

  initSearch(): void {
    fromEvent(this.searchBox.nativeElement, 'input').pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe((value: string) => {
      this.search = value;
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
