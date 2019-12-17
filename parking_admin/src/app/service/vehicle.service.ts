import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { CommonService } from './common.service';
import { Vehicle } from '../models/vehicle';
import { Pagination } from '../models/pagination';

@Injectable()
export class VehicleService {

    vehicles: Observable<Vehicle[]>;
    pagination: Observable<Pagination>;
    private _vehicles: BehaviorSubject<Vehicle[]>;
    private _pagination: BehaviorSubject<Pagination>;
    private baseUrl: string;
    private dataStore: {
        vehicles: Vehicle[],
        pagination: Pagination
    };

    constructor(private commonService: CommonService) {
        this.baseUrl = environment.apiUrlBase + environment.apiPaths.vehicle;
        this.dataStore = { vehicles: [] , pagination: new Pagination()};
        this._vehicles = <BehaviorSubject<Vehicle[]>>new BehaviorSubject([]);
        this._pagination = <BehaviorSubject<Pagination>>new BehaviorSubject(new Pagination());
        this.vehicles = this._vehicles.asObservable();
        this.pagination = this._pagination.asObservable();
    }

    getList(params={offset:0, limit:20, orderby:null, where:null}){
        let url = this.baseUrl+'/all/';
        this.commonService.get(url, params)
            .subscribe(data => {
              this.dataStore.vehicles = data.items;
              this.dataStore.pagination = data.pagination;
              this._vehicles.next(Object.assign({}, this.dataStore).vehicles);
              this._pagination.next(Object.assign({}, this.dataStore).pagination);
            },
              error => console.log('Could not load Vehicles.'),
              () => console.log("done")
            );
    }

    search(params={offset:0, limit:20, orderby:null, where:null}){
        let url = this.baseUrl+'/all/';
        return this.commonService.get(url, params);
    }

    get(id){
        let url = this.baseUrl+'/'+id;
        return this.commonService.get(url);
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
