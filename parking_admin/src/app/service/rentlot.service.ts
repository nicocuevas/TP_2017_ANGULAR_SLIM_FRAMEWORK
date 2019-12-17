import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { CommonService } from './common.service';
import { Rentlot } from '../models/rentlot';
import { Pagination } from '../models/pagination';

@Injectable()
export class RentLotService {
    pagination: Observable<Pagination>;
    rentlots: Observable<Rentlot[]>;
    private _rentlots: BehaviorSubject<Rentlot[]>;
    private _pagination: BehaviorSubject<Pagination>;
    private baseUrl: string;
    private dataStore: {
        rentlots: Rentlot[],
        pagination: Pagination
    };


    constructor(private commonService: CommonService) {
        this.baseUrl = environment.apiUrlBase + environment.apiPaths.rentLot;
        this.dataStore = { rentlots: [], pagination: new Pagination()};
        this._rentlots = <BehaviorSubject<Rentlot[]>>new BehaviorSubject([]);
        this._pagination = <BehaviorSubject<Pagination>>new BehaviorSubject(new Pagination());
        this.pagination = this._pagination.asObservable();
        this.rentlots = this._rentlots.asObservable();
    }

    getList(params={offset:0, limit:20, orderby:null, where:null}){
        let url = this.baseUrl+'/all/';
        this.commonService.get(url, params)
            .subscribe(data => {
              this.dataStore.rentlots = data.items;
              this.dataStore.pagination = data.pagination;
              this._rentlots.next(Object.assign({}, this.dataStore).rentlots);
              this._pagination.next(Object.assign({}, this.dataStore).pagination);
            },
              error => console.log('Could not load Rentlots.'),
              () => console.log("done")
            );
    }

    get(id){
        let url = this.baseUrl+'/'+id;
        return this.commonService.get(url);
    }

    getLotsReportingData(data=null){
        let url = this.baseUrl+'/reporting/lots';
        return this.commonService.get(url,data);
    }

    getBillingReportingData(data=null){
        let url = this.baseUrl+'/reporting/billing';
        return this.commonService.get(url,data);
    }

    getAverageReportingData(data=null){
        let url = this.baseUrl+'/reporting/average';
        return this.commonService.get(url,data);
    }

    create(data){
        let url = this.baseUrl;
        return this.commonService.post(url, data);
    }

    update(id, data){
        let url = this.baseUrl+'/'+id;
        return this.commonService.put(url, data);
    }

    delete(id){}


}
