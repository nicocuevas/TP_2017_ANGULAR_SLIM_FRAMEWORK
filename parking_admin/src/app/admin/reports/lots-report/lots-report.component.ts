import { Component, OnInit } from '@angular/core';

import { RentLotService } from '../../../service/rentlot.service';

import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lots-report',
  templateUrl: './lots-report.component.html',
  styleUrls: ['./lots-report.component.css']
})
export class LotsReportComponent implements OnInit {

  public lotsRow : any = null;
  public lotsPage : number = 1;
  public lots : any = {total_items:0, rows:[]};
  public unusedLots : any = {total_items:0, rows:[]};
  public unusedLotsRow : any = null;
  public unusedLotsPage : number = 1;

  public fromDate;
  public toDate;
  public reservedLots;
  public showAll;

  constructor(private rentLotService: RentLotService, calendar: NgbCalendar) {
      this.fromDate = calendar.getNext(calendar.getToday(), 'd', -30);
      this.toDate = calendar.getToday();
      this.reservedLots = false;
      this.showAll = true;
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

      if(!this.showAll){
          filters.push({field:'lot.reserved', value:this.reservedLots, type:'eq', format:null});
      }

      this.rentLotService.getLotsReportingData(
          {where:{filters:filters}}
        )
      .subscribe(value => {
          this.lots = this.buildTable(value.items);
          this.lotsRow = this.lots.rows[0];
          this.unusedLots = this.buildTable(value.unused_lots);
          this.unusedLotsRow = this.unusedLots.rows[0];
          this.lotsPage = 1;
          this.unusedLotsPage = 1;
      });
  }

  ngOnInit() {
      this.getReportData();
  }

  setLotsPage(page){
    this.lotsRow = this.lots.rows[page-1];
  }

  setUnusedLotsPage(page){
    this.unusedLotsRow = this.unusedLots.rows[page-1];
  }


  applyFilters(){
      this.getReportData();
  }

}
