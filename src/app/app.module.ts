import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatOptionModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ConverterComponent} from './components/converter/converter.component';
import {ListCurrenciesComponent} from './components/list-currencies/list-currencies.component';
import { CurrencyComponent } from './components/currency/currency.component';
import {FilterPipe} from './pipes/filter.pipe';
import { AnySelectComponent } from './components/any-select/any-select.component';


@NgModule({
  declarations: [
    AppComponent,
    ListCurrenciesComponent,
    CurrencyComponent,
    ConverterComponent,
    FilterPipe,
    AnySelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatOptionModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
