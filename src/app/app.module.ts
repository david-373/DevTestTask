import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule } from 'devextreme-angular';
import { DxBoxModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular';
import { DevExtremeModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

import { InvoiceNumberComponent } from './invoice-number/invoice-number.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceNumberComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DevExtremeModule,
    DxButtonModule,
    DxBoxModule,
    HttpClientModule,
    DxDataGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
