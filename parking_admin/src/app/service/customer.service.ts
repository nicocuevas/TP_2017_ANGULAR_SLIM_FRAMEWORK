import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { CommonService } from './common.service';
import { Customer } from '../models/customer';

@Injectable()
export class CustomerService {

    customers: Observable<Customer[]>
    private _customers: BehaviorSubject<Customer[]>;
    private baseUrl: string;
    private dataStore: {
        customers: Customer[]
    };

    constructor(private commonService: CommonService) {
        this.baseUrl = environment.apiUrlBase + environment.apiPaths.customer;
        this.dataStore = { customers: [] };
        this._customers = <BehaviorSubject<Customer[]>>new BehaviorSubject([]);
        this.customers = this._customers.asObservable();
    }

    getList(params={offset:0, limit:20, orderby:null, where:null}){
        let url = this.baseUrl+'/all/';
        this.commonService.get(url, params)
            .subscribe(data => {
              this.dataStore.customers = data.items;
              this._customers.next(Object.assign({}, this.dataStore).customers);
            },
              error => console.log('Could not load Customers.'),
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
