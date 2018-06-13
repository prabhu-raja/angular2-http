import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
    private authUrl: string = 'https://reqres.in/api';
    private loggedIn:boolean = false;

    constructor(private http: Http) { 
        // look at the local storage to check if the user is logged in
         this.loggedIn = !!localStorage.getItem('auth_token');
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    login(username: string, password: string): Observable<string> {
        return this.http
                .post(`${this.authUrl}/login`, {username, password})
                .map(res => res.json())
                .do(res => {
                    if(res.token)
                        localStorage.setItem('auth_token', res.token);
                })
                .catch(this.handleError);
    }

    /**
     * Handle any errors
     */
    private handleError(err) {
        let errMsg: string;
        if(err instanceof Response) {
            let body = err.json() || '';
            // let error = body.error || JSON.stringify(body);
            let error = JSON.stringify(body);
            errMsg = `${err.status} - ${err.statusText} || ''} ${error}`;
        } else {
            errMsg = err.msg ? err.msg : err.toString();
        }
        return Observable.throw(errMsg);
        // return Observable.throw(err.json().data || 'Server Error');
    }

}