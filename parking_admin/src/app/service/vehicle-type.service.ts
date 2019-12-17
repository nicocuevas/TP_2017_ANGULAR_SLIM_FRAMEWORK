import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { CommonService } from './common.service';
import { VehicleType } from '../models/vehicle-type';

@Injectable()
export class VehicleTypeService {

    vehiclesTypes: Observable<VehicleType[]>
    private _vehiclesTypes: BehaviorSubject<VehicleType[]>;
    private baseUrl: string;
    private dataStore: {
        vehiclesTypes: VehicleType[]
    };

    constructor(private commonService: CommonService) {
        this.baseUrl = environment.apiUrlBase + environment.apiPaths.vehicleType;
        this.dataStore = { vehiclesTypes: [] };
        this._vehiclesTypes = <BehaviorSubject<VehicleType[]>>new BehaviorSubject([]);
        this.vehiclesTypes = this._vehiclesTypes.asObservable();
    }

    getList(params={offset:0, limit:20, orderby:null, where:null}){
        let url = this.baseUrl+'/all/';
        this.commonService.get(url, params)
            .subscribe(data => {
              this.dataStore.vehiclesTypes = data.items;
              this._vehiclesTypes.next(Object.assign({}, this.dataStore).vehiclesTypes);
            },
              error => console.log('Could not load VehicleTypes.'),
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
