import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
    public token: string;
    public user: any;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('tk'));
        this.token = currentUser && currentUser.token;
        this.user = currentUser && currentUser.user;
    }

    login(username: string, password: string): Observable<boolean> {
        var uri = environment.apiUrlBase + environment.apiPaths.auth;
        return this.http.post(uri, JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                let user = response.json() && response.json().user;
                if (token) {
                    // set token property
                    this.token = token;
                    this.user = user;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('tk', JSON.stringify({token: token, user:user }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('tk');
    }
}