export interface ICurrencyList {
  [key: string]: ICurrency;
}

export interface ICurrency {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
}

export interface IExchangeRates {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: ICurrencyList;
}
