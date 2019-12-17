import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { CommonService } from './common.service';
import { Lot } from '../models/lot';
import { Pagination } from '../models/pagination';

@Injectable()
export class LotService {

    lots: Observable<Lot[]>;
    pagination: Observable<Pagination>;
    private _lots: BehaviorSubject<Lot[]>;
    private _pagination: BehaviorSubject<Pagination>;
    private baseUrl: string;
    private dataStore: {
        lots: Lot[],
        pagination: Pagination
    };

    constructor(private commonService: CommonService) {
        this.baseUrl = environment.apiUrlBase + environment.apiPaths.lot;
        this.dataStore = { lots: [], pagination: new Pagination() };
        this._lots = <BehaviorSubject<Lot[]>>new BehaviorSubject([]);
        this._pagination = <BehaviorSubject<Pagination>>new BehaviorSubject(new Pagination());
        this.lots = this._lots.asObservable();
        this.pagination = this._pagination.asObservable();
    }

    getList(params={offset:0, limit:20, orderby:null, where:null}){
        let url = this.baseUrl+'/all/';
        this.commonService.get(url, params)
            .subscribe(data => {
              this.dataStore.lots = data.items;
              this.dataStore.pagination = data.pagination;
              this._lots.next(Object.assign({}, this.dataStore).lots);
              this._pagination.next(Object.assign({}, this.dataStore).pagination);
            },
              error => console.log('Could not load Lots.'),
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
