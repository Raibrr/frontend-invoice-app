import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './page/main-page.component';
import { DateSelectorComponent } from './components/date-selector/date-selector.component';
import { FormsModule } from '@angular/forms';
import { InvoiceCardComponent } from "./components/invoice-card/invoice-card.component";



@NgModule({
  declarations: [
    MainPageComponent,
    DateSelectorComponent,
    InvoiceCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
],
  exports: [
    MainPageComponent
  ]
})
export class InvoiceModule { }
