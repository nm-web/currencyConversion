import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ICurrency} from '../../model/types';

@Component({
  selector: 'app-any-select',
  templateUrl: './any-select.component.html',
  styleUrls: ['./any-select.component.scss']
})
export class AnySelectComponent implements OnInit {
  @Input() set items(items: { data: ICurrency[]; index: number }) {
    console.log(111, items);
    if (items?.data?.length > 0) {
      this.selected = items.data[items.index];
      this.options = items.data;
    }
  }

  @Output() selectedValue = new EventEmitter<ICurrency>();
  options: ICurrency[];
  selected: ICurrency;

  constructor() {
  }

  ngOnInit(): void {
  }

}
