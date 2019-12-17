import { Component, OnInit } from '@angular/core';
import { RentLotService } from '../../../service/rentlot.service';
import { environment } from '../../../../environments/environment';

import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.css']
})
export class AverageComponent implements OnInit {

  public vehiclesRow : any = null;
  public vehiclesPage : number = 1;
  public vehicles : any = {total_items:0, rows:[]};

  public lotsRow : any = null;
  public lotsPage : number = 1;
  public lots : any = {total_items:0, rows:[]};

  public fromDate;
  public toDate;
  public totalAmountAverage;

  public reportUrl;

  constructor(private rentLotService: RentLotService, calendar: NgbCalendar) {
      this.fromDate = calendar.getNext(calendar.getToday(), 'd', -30);
      this.toDate = calendar.getToday();
      this.reportUrl = null;
  }

  buildTable(list){
      let data = {total_items:0, rows:[]}
      if(list){
          let limit = list.length/5,
          arrayList = [],
          begin = 0,
          end = 5;
          for (var i = 0; i < limit; i++) {
              arrayList.push(list.slice(begin,end));
              begin = end;
              end+= 5;
          }
          data = {total_items:list.length, rows:arrayList}
      }
      return data;
  }

  getReportData(){
      let fromDate = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day,
      toDate = this.toDate.year+'-'+this.toDate.month+'-'+this.toDate.day;
      let filters = [
          {field:'rentlot.startTime', value:fromDate, type:'gte', format:'date'},
          {field:'rentlot.startTime', value:toDate, type:'lte', format:'date'},
      ];

      this.rentLotService.getAverageReportingData(
          {where:{filters:filters}}
        )
      .subscribe(value => {
          this.vehicles = this.buildTable(value.vehicles);
          this.vehiclesRow = this.vehicles.rows[0];
          this.vehiclesPage = 1;
          this.totalAmountAverage = value.total_amount_average;
          this.lots = this.buildTable(value.lots);
          this.lotsRow = this.lots.rows[0];
          this.lotsPage = 1;
      });
  }

  download(){
      let fromDate = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day,
      toDate = this.toDate.year+'-'+this.toDate.month+'-'+this.toDate.day;
      let filters = [
          {field:'rentlot.startTime', value:fromDate, type:'gte', format:'date'},
          {field:'rentlot.startTime', value:toDate, type:'lte', format:'date'},
      ];

      this.rentLotService.getAverageReportingData(
          {where:{filters:filters},format:'pdf'}
        )
      .subscribe(value => {
          this.reportUrl = environment.filesUrlBase + '/' + value;
      });
  }

  ngOnInit() {
      this.getReportData();
  }

  setVehiclesPage(page){
    this.vehiclesRow = this.vehicles.rows[page-1];
  }

  applyFilters(){
      this.getReportData();
  }

}
