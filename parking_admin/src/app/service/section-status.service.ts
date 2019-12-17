import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { CommonService } from './common.service';
import { Section } from '../models/section';

@Injectable()
export class SectionStatusService {

    sections: Observable<Section[]>
    private _sections: BehaviorSubject<Section[]>;
    private baseUrl: string;
    private dataStore: {
        sections: Section[]
    };

    constructor(private commonService: CommonService) {
        this.baseUrl = environment.apiUrlBase + environment.apiPaths.section;
        this.dataStore = { sections: [] };
        this._sections = <BehaviorSubject<Section[]>>new BehaviorSubject([]);
        this.sections = this._sections.asObservable();
    }

    getList(params={offset:0, limit:20, orderby:null, where:null}){
        let url = this.baseUrl+'/all/';
        this.commonService.get(url, params)
            .subscribe(data => {
              this.dataStore.sections = data.items;
              this._sections.next(Object.assign({}, this.dataStore).sections);
            },
              error => console.log('Could not load Sections.'),
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
