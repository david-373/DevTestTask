import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableDataService } from './shared/services/tabledata.service';
import { Subscription } from "rxjs";

import { Model, AdditionalModel } from "./shared/interfaces/dataType.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private tableDataService: TableDataService) {
  }

  private sub!: Subscription;
  public invoiceListData: Model[] = [];
  public invoiceTableData!: AdditionalModel[];
  public pattern: any = /^\(\d{3}\) \d{3}-\d{4 }$/i;
  public invoiceNumber!: number;
  public newDate!: Date;

  ngOnInit(): void {
    this.tableDataService.getData()
      .subscribe((data: Model[]) => {
        this.invoiceListData = data;

        data[0].additional[0].netWeight = data[0].additional[0].grossWeight - data[0].additional[0].tareWeight;
        this.invoiceTableData = data[0].additional;
        this.invoiceNumber = data[0].invoiceNumber;
      });
    this.newDate = new Date();
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  contentReady = (element: any) => {
    element.component.selectRowsByIndexes('0');
  }

  filterTable(event: any) {
    this.invoiceListData[event.key - 1].additional.forEach((element: AdditionalModel) => {
      element.netWeight = element.grossWeight - element.tareWeight
    });

    this.invoiceTableData = this.invoiceListData[event.key - 1].additional;

    this.invoiceNumber = this.invoiceListData[event.key - 1].invoiceNumber;
  }

}



