import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { CommonService } from './common.service';
import { RentStatus } from '../models/rent-status';

@Injectable()
export class RentStatusService {

rentStatus: Observable<RentStatus[]>
    private _rentStatus: BehaviorSubject<RentStatus[]>;
    private baseUrl: string;
    private dataStore: {
        rentStatus: RentStatus[]
    };

    constructor(private commonService: CommonService) {
        this.baseUrl = environment.apiUrlBase + environment.apiPaths.rentStatus;
        this.dataStore = { rentStatus: [] };
        this._rentStatus = <BehaviorSubject<RentStatus[]>>new BehaviorSubject([]);
        this.rentStatus = this._rentStatus.asObservable();
    }

    getList(params={offset:0, limit:20, orderby:null, where:null}){
        let url = this.baseUrl+'/all/';
        this.commonService.get(url, params)
            .subscribe(data => {
              this.dataStore.rentStatus = data.items;
              this._rentStatus.next(Object.assign({}, this.dataStore).rentStatus);
            },
              error => console.log('Could not load RentStatus.'),
              () => console.log("done")
            );
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
