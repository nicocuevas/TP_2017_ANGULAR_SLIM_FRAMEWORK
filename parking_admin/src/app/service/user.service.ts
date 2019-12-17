import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { CommonService } from './common.service';
import { User } from '../models/user';

@Injectable()
export class UserService {

    users: Observable<User[]>
    private _users: BehaviorSubject<User[]>;
    private baseUrl: string;
    private dataStore: {
        users: User[]
    };

    constructor(private commonService: CommonService) {
        this.baseUrl = environment.apiUrlBase + environment.apiPaths.user;
        this.dataStore = { users: [] };
        this._users = <BehaviorSubject<User[]>>new BehaviorSubject([]);
        this.users = this._users.asObservable();
    }

    getList(params={offset:0, limit:20, orderby:null, where:null}){
        let url = this.baseUrl+'/all/';
        this.commonService.get(url, params)
            .subscribe(data => {
              this.dataStore.users = data.items;
              this._users.next(Object.assign({}, this.dataStore).users);
            },
              error => console.log('Could not load Users.'),
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

    upload(id, file){
        let url = this.baseUrl+'/'+id;
        let fileToUpload = new FormData();
        console.log(file);
        fileToUpload.append("file", file);
        this.commonService.uploadFile(url, fileToUpload);
    }

    delete(id){}

}