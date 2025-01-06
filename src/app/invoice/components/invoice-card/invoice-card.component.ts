import { Component, Input } from '@angular/core';
import { Invoice } from '../../interfaces/invoice.interface';

@Component({
  selector: 'app-invoice-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrl: './invoice-card.component.css',
  standalone: false
})

export class InvoiceCardComponent {
  @Input()
  public invoice?: Invoice;

}
