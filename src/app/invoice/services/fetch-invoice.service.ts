import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from '../interfaces/invoice.interface';
import { ParamsDate } from '../interfaces/params-date.inteface';
import { BehaviorSubject, finalize } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class FetchInvoiceService {

  private apiUrl = 'http://localhost:3000/api/v1/invoices';
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private noContentSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();
  public noContent$ = this.noContentSubject.asObservable();
  public invoices: Invoice[] = [];

  constructor(private http: HttpClient) { }

  getData(params: ParamsDate){
    this.loadingSubject.next(true);
    this.noContentSubject.next(false)

    return this.http.get<ApiResponse>(`${this.apiUrl}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        ...params
      }
    }).pipe(
      finalize(() => {
        this.loadingSubject.next(false);
      })
    ).subscribe({
      next: (data) => {
        if (data.message === 'No invoices found') this.noContentSubject.next(true);
        this.invoices = data.invoices
      },
      error: (error) => {
        console.error("Error fetching invoices:", error)
      }
    })
  }


}
