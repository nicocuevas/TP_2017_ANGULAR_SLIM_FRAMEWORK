import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {MdSnackBar} from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';

import { Vehicle } from '../../models/vehicle';

import { VehicleService } from '../../service/vehicle.service';
import { LotService } from '../../service/lot.service';
import { RentTypeService } from '../../service/rent-type.service';
import { RentLotService } from '../../service/rentlot.service';


@Component({
  selector: 'app-parking',
  templateUrl:'./parking.component.html',
  styles: [
  `
    h1 {
      margin: 1em 0 .5em;
    }

    h3 {
      color: #444;
      border-bottom: 1px solid #efefef;
      margin: 1em 0 1em;
    }

    .mt-10{
      margin-top: 5%;
    }
    .form-group:last-child {
      margin-bottom: 0;
    }

    .card-block {
      background-color: #f7f5f2;
    }

    :host {
      padding: 5em 0;
    }

    :host >>> .match {
      color: #3F51B4;
    }

    .completer-limit /deep/ .completer-dropdown {
      max-height: 20rem;
    }

    .chevron {
      padding-top: 40%;
    }

    .chevron-holder {
      position: absolute;
      height: 100%;
      border: 1px solid rgba(0,0,0,.15);
      border-top-color: rgba(0, 0, 0, 0.14902);
      background-color: white;
      border-radius: 25%;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      border-left: 0;
    }

    .chevron-holder.dropdown-open {
      border-color: #5cb3fd;
    }

    .with-chevron /deep/ .completer-input {
      border-right: 0;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }`
  ]
})
export class ParkingComponent implements OnInit, OnDestroy {

  public id;
  public vehicle;
  public lots;
  public rentlots;
  public rentLotsTypes;
  public selectedVehicle;
  public selectedLot;
  public selectedRentLotType;
  public selectedRentlot;
  public formView: FormGroup;
  public searchForm;
  public checkOutSearchForm;
  public checkinForm;
  public checkoutForm;
  public rentLotTypeForm;
  public showDetail;
  public paymentDetail;

  public pagination;
  public page : number = 1;

  public paginationRentLot;
  public pageRentLot : number = 1;

  protected searchStr: string;
  protected dataService: CompleterData;
  protected searchData = [];

  protected paymentAmounts = {
    month: {price:5100, time:720},
    day: {price:170, time:24},
    halfday: {price:90, time:12},
    hour: {price:10, time:1}
  };

  public model: any;
  public tabIndex: any;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);


  constructor(private vehicleService: VehicleService,
    private lotService: LotService,
    private rentTypeService: RentTypeService,
    private rentLotService: RentLotService,
    private fb: FormBuilder,
    private completerService: CompleterService,
    public snackBar: MdSnackBar,
    private router: Router, private route: ActivatedRoute, 
    private location: Location) {
    this.searchForm = true;
    this.checkOutSearchForm = true;
    this.checkinForm = false;
    this.checkoutForm = false;
    this.rentLotTypeForm = false;
    this.showDetail = false;
    this.paymentDetail = false;
    this.lots = this.lotService.lots;
    this.pagination = this.lotService.pagination;
    this.rentLotsTypes = this.rentTypeService.rentsTypes;
    this.rentlots = this.rentLotService.rentlots;
    this.paginationRentLot = this.rentLotService.pagination;
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

  formatter = (result: any) => {  
    return result.plate;
  };

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
        .distinctUntilChanged()
        .do(() => this.searching = true)
        .switchMap(term => {
          let source = this.vehicleService.search({
            limit:5,
            offset:0,
            orderby:{field:'plate',type:'asc'},
            where:{field:'plate',value:term}
          })
            .do(() => this.searchFailed = false)
            .catch(() => {
              this.searchFailed = true;
              return Observable.of([]);
            })
            .map((res: any) => res.items);
            return source;
          })
        .do(() => this.searching = false)
        .merge(this.hideSearchingWhenUnsubscribed);
  
  selectItem(e){
    if(e && e.plate){
      this.vehicle = [e];
      this.selectedVehicle = e;
    }
  }

  onSelected(selected: CompleterItem){
    if(selected){
      this.vehicle = [selected.originalObject];
      this.selectedVehicle = selected.originalObject;
    }
  }

  showCheckin(){
    this.lotService.getList({offset:0, limit:8, orderby:null, where:null});
    this.lotService.pagination.subscribe(value => {this.pagination = value;console.log(value);});
    this.searchForm = false;
    this.checkinForm = true;
  }
  
  selectLot(lot){
    this.rentTypeService.getList();
    this.selectedLot = lot;
    this.checkinForm = false;
    this.rentLotTypeForm = true;
  }

  selectRentTypeLot(){
    this.rentLotTypeForm = false;
    this.showDetail = true;
  }
  
  backSearchForm(){
    this.searchForm = true;
    this.checkinForm = false;
  }

  backCheckInForm(){
    this.rentLotTypeForm = false;
    this.checkinForm = true;
  }

  checkin(){
    let payload = {
      vehicle: this.selectedVehicle.id,
      lot: this.selectedLot.id,
      rentType: this.selectedRentLotType
    };
    this.rentLotService.create(payload)
            .subscribe(data => {
              let snackBarRef = this.snackBar.open(
                data.message,"OK",{
                duration: 2000,
              });
              if(data.response==='ok'){
                snackBarRef.afterDismissed().subscribe(() => {
                  this.clear();
                });
              }
            },
              error => console.log('Could not create Rentlot.'),
              () => console.log("done")
            );
  }
  
  clear(){
    this.searchForm = true;
    this.checkOutSearchForm = true;
    this.checkinForm = false;
    this.checkoutForm = false;
    this.rentLotTypeForm = false;
    this.showDetail = false;
    this.paymentDetail = false;
    this.lots = this.lotService.lots;
    this.dataService = this.completerService.local(
        null,
        'plate',
        'plate'
        );
    this.vehicle = null;
    this.selectedVehicle = null;
    this.selectedRentLotType = null;
    this.selectedRentlot = null;
  }

  getRentedLotes(event){
    this.clear();
    if(event.tab && event.tab.textLabel==='RENTED'){
      this.rentLotService.getList({offset:0, limit:5, 
        orderby:{field:'rentlot.id',type:'asc'},
        where:{filters:[{field:'rentStatus.id', value:1, type:'eq'}]}});
    }
    this.rentLotService.pagination.subscribe(value => this.paginationRentLot = value);
  }

  showCheckout(rentlot){
    this.rentLotService.getList({offset:0, limit:20, orderby:{field:'rentlot.id',type:'asc'},
        where:{filters:[{field:'vehicle.id', value:rentlot.id, type:'eq'},
        {field:'rentStatus.id', value:1, type:'eq'}]}});
    this.checkOutSearchForm = false;
    this.checkoutForm = true;
  }
  
  backSearchCheckout(){
    this.checkoutForm = false;
    this.checkOutSearchForm = true;
  }

  backCheckOut(){
    this.paymentDetail = false;
    this.checkoutForm = true;
  }

  calcAmount(rentlot){
      let amount = 0,
      d2 = new Date(),
      d1 = new Date(rentlot.createdAt.date+rentlot.createdAt.timezone),
      dateDiff = (d2.valueOf() - d1.valueOf())/1000/60/60,
      totalTime = dateDiff < 1 ? 1 : parseFloat(dateDiff.toFixed(2)),
      price = this.paymentAmounts[rentlot.rentType.name].price,
      time = this.paymentAmounts[rentlot.rentType.name].time,
      hprice = this.paymentAmounts['hour'].price;

      if(rentlot.rentType.name!="hour"){
        let t = time > totalTime ;
        console.log(time,totalTime,t);
        amount = time < totalTime ?  price + hprice * (totalTime - time) : price ;
      }else{
        amount =  hprice * totalTime;
      }
      

      rentlot.payment.amount = parseFloat(amount.toFixed(2));
      rentlot.startTime = d1;
      rentlot.currentTime = d2;
      rentlot.totalHours = totalTime;

      return rentlot;
  }

  showRentLotDetail(rentlot){
    this.selectedRentlot = this.calcAmount(rentlot);
  }

  selectRentLot(rentlot){
    this.selectedRentlot = this.calcAmount(rentlot);
    this.checkoutForm = false;
    this.paymentDetail = true;
  }

  checkout(){
    let payload = {
      rentlot: this.selectedRentlot.id,
      amount: this.selectedRentlot.payment.amount,
      endTime: this.selectedRentlot.currentTime,
      paymentStatus: 2,
      rentStatus: 2,
      lot:{available:true}
    };

    this.rentLotService.update(this.selectedRentlot.id,payload)
            .subscribe(data => {
              let snackBarRef = this.snackBar.open(
                data.message,"OK",{
                duration: 2000,
              });
              if(data.response==='ok'){
                snackBarRef.afterDismissed().subscribe(() => {
                  this.clear();
                });
              }
            },
              error => console.log('Could not update Rentlot.'),
              () => console.log("done")
            );
  }

  setPage(page){
    this.lotService.getList(
      {
        offset:page-1, 
        limit:this.pagination.limit,
        orderby:null,
        where:null
      });
  }

  setPageRentLot(page){
    this.rentLotService.getList({offset:page-1, limit:this.paginationRentLot.limit, 
        orderby:{field:'rentlot.id',type:'asc'},
        where:{filters:[{field:'rentStatus.id', value:1, type:'eq'}]}});
  }
}
