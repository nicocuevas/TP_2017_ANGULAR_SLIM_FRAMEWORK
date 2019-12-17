import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { CommonService } from './common.service';
import { UserGroup } from '../models/user-group';

@Injectable()
export class UserGroupService {

  groups: Observable<UserGroup[]>
    private _groups: BehaviorSubject<UserGroup[]>;
    private baseUrl: string;
    private dataStore: {
        groups: UserGroup[]
    };

    constructor(private commonService: CommonService) {
        this.baseUrl = environment.apiUrlBase + environment.apiPaths.userGroup;
        this.dataStore = { groups: [] };
        this._groups = <BehaviorSubject<UserGroup[]>>new BehaviorSubject([]);
        this.groups = this._groups.asObservable();
    }

    getList(offset = 0, limit = 20){
        let url = this.baseUrl+'/'+offset+'/'+limit;
        this.commonService.get(url)
            .subscribe(data => {
              this.dataStore.groups = data;
              this._groups.next(Object.assign({}, this.dataStore).groups);
            },
              error => console.log('Could not load groups.'),
              () => console.log("done")
            );
    }

    get(id){
        let url = this.baseUrl+'/'+id;
        return this.commonService.get(url);
    }

}
