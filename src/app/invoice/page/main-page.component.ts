import { Component } from '@angular/core';
import { FetchInvoiceService } from '../services/fetch-invoice.service';
import { ParamsDate } from '../interfaces/params-date.inteface';
import { Invoice } from '../interfaces/invoice.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-invoice-main-page',
  standalone: false,

  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(private FetchInvoiceService: FetchInvoiceService) {}

  get invoices(): Invoice[] {
    return this.FetchInvoiceService.invoices
  }

  get loading(): Observable<boolean> {
    return this.FetchInvoiceService.loading$
  }

  get noContentValue(): Observable<boolean> {
    return this.FetchInvoiceService.noContent$
  }

  getInvoices(params: ParamsDate):void {
    this.FetchInvoiceService.getData(params)
  }
}
