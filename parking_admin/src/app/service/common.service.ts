import { Injectable } from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AuthenticationService } from './authentication.service';


@Injectable()
export class CommonService {

  private options;
  
  constructor(private http: Http,
    private auth: AuthenticationService,
    private router: Router) {
    let headers = new Headers();
    headers.append('Authorization', this.auth.token);
    headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({'headers': headers});
  }

  private updateOptions( params: any ) {
    let options = this.options;
    if(params){
      options.params = params;
    }
    return options;
  }

  public get( url: string, params?: any) {
    let options = this.updateOptions(params);
    return this.http.get(url, this.options)
                    .map(this.manageData)
                    .catch(this.handleError);
  }

  public post( url: string, params?: any) {
    let options = this.updateOptions(params);
    return this.http.post(url, params, this.options)
                    .map(this.manageData)
                    .catch(this.handleError);
  }

  public put( url: string, params?: any){
    let options = this.updateOptions(params);
    return this.http.put(url, params, this.options)
                    .map(this.manageData)
                    .catch(this.handleError);
  }

  public patch( url: string, params?: any){
    /* not implemented yet */
  }

  public delete( url: string, params?: any){
    /* not implemented yet */
  }

  public uploadFile(url, fileToUpload){
      fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': this.auth.token,
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: fileToUpload
      }).then(
        response => response.json()
      ).then(
        success => console.log(success)
      ).catch(
        error => console.log(error)
      );  
  }

  private manageData(response: Response) {
    return response.json() || { };
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}
