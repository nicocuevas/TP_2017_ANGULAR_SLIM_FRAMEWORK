import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { CommonService } from './common.service';
import { Brand } from '../models/brand';

@Injectable()
export class BrandService {

    brands: Observable<Brand[]>
    private _brands: BehaviorSubject<Brand[]>;
    private baseUrl: string;
    private dataStore: {
        brands: Brand[]
    };

    constructor(private commonService: CommonService) {
        this.baseUrl = environment.apiUrlBase + environment.apiPaths.brand;
        this.dataStore = { brands: [] };
        this._brands = <BehaviorSubject<Brand[]>>new BehaviorSubject([]);
        this.brands = this._brands.asObservable();
    }

    getList(params={offset:0, limit:20, orderby:null, where:null}){
        let url = this.baseUrl+'/all/';
        this.commonService.get(url, params)
            .subscribe(data => {
              this.dataStore.brands = data.items;
              this._brands.next(Object.assign({}, this.dataStore).brands);
            },
              error => console.log('Could not load Brands.'),
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
