import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable} from 'rxjs/Observable';
import { User } from "../models/user";

@Injectable()
export class UserService {
    private usersUrl: string = 'https://reqres.in/api/users';
    constructor(private http: Http) { }

    /**
     * Get all Users.
     */
    getUsers(): Observable<User[]> {
        return this.http.get(this.usersUrl)
                        .map(res => res.json().data)
                        .map(mUsrs => mUsrs.map(this.toUser))
                        .catch(this.handleError);
    }

    /**
     * Get a single user.
     * @param id is userId number
     */
    getUser(id: number): Observable<User> {
        return this.http.get(`${this.usersUrl}/${id}`)
                        .map(res => res.json().data)
                        .map(this.toUser)
                        .catch(this.handleError);
    }

    // create a user

    /**
     * Update a user
     * @param user User Object
     */
    updateUser(user: User): Observable<User> {
        return this.http.put(`${this.usersUrl}/${user.id}`, user)
                        .map(res => res.json())
                        .catch(this.handleError);
    }

    // delete a user

    /**
     * Convert User Info from API to our standard
     */
    private toUser(mUsr): User {
        return {
            id      : mUsr.id,
            name    : `${mUsr.first_name} ${mUsr.last_name}`,
            username: mUsr.first_name,
            avatar  : mUsr.avatar
        };
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