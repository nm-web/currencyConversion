import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConverterComponent} from './components/converter/converter.component';
import {ListCurrenciesComponent} from './components/list-currencies/list-currencies.component';


const routes: Routes = [
  {path: 'listOfCurrencies', component: ListCurrenciesComponent},
  {path: 'converter', component: ConverterComponent},
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'listOfCurrencies'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
