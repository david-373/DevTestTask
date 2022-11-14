import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-number',
  templateUrl: './invoice-number.component.html',
  styleUrls: ['./invoice-number.component.scss']
})
export class InvoiceNumberComponent {
  @Input('invoiceTable') invoiceTableData: any;
}
