import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { CommonService } from './common.service';
import { RentType } from '../models/rent-type';

@Injectable()
export class RentTypeService {

    rentsTypes: Observable<RentType[]>
    private _rentsTypes: BehaviorSubject<RentType[]>;
    private baseUrl: string;
    private dataStore: {
        rentsTypes: RentType[]
    };

    constructor(private commonService: CommonService) {
        this.baseUrl = environment.apiUrlBase + environment.apiPaths.rentType;
        this.dataStore = { rentsTypes: [] };
        this._rentsTypes = <BehaviorSubject<RentType[]>>new BehaviorSubject([]);
        this.rentsTypes = this._rentsTypes.asObservable();
    }

    getList(params={offset:0, limit:20, orderby:null, where:null}){
        let url = this.baseUrl+'/all/';
        this.commonService.get(url, params)
            .subscribe(data => {
              this.dataStore.rentsTypes = data.items;
              this._rentsTypes.next(Object.assign({}, this.dataStore).rentsTypes);
            },
              error => console.log('Could not load RentTypes.'),
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
