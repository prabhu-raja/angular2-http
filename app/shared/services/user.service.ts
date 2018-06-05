import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable} from 'rxjs/Observable';
import { User } from "../models/user";
@Injectable()
export class UserService {
    private usersUrl: string = 'https://reqres.in/ap/users';
    constructor(private http: Http) { }

    /**
     * Get all Users
     */
    getUsers(): Observable<User[]> {
        return this.http.get(this.usersUrl)
            .map(res => res.json().data)
            .catch(this.handleError);
    }

    // get a single user
    getUser(): Observable<User> {
        return this.http.get('http://example.com')
            .map(res => res.json().data)
            .catch(this.handleError);
    }

    // create a user

    // update a user

    // delete a user

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