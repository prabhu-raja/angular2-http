import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable} from 'rxjs/Observable';
import { User } from "../models/user";
import { Subject } from 'rxjs/Subject';


@Injectable()
export class UserService {

    private usersUrl: string = 'https://reqres.in/api/users';

    // Observable Source
    private userCreatedSource = new Subject<User>();
    private userDeletedSource = new Subject();
    
    // Observable Stream
    userCreated$ = this.userCreatedSource.asObservable();
    userDeleted$ = this.userDeletedSource.asObservable();

    constructor(private http: Http) { }

    /**
     * Get all Users👨🏻👨🏻👨🏻.
     */
    getUsers(): Observable<User[]> {
        return this.http.get(this.usersUrl)
                        .map(res => res.json().data)
                        .map(mUsrs => mUsrs.map(this.toUser))
                        .catch(this.handleError);
    }

    /**
     * Get a single user👨🏻.
     * @param id is userId number
     */
    getUser(id: number): Observable<User> {
        return this.http.get(`${this.usersUrl}/${id}`)
                        .map(res => res.json().data)
                        .map(this.toUser)
                        .catch(this.handleError);
    }

    /**
     * Create User👨🏻
     */
    createUser(usr: User): Observable<User> {
        return this.http.post(this.usersUrl, usr)
                        .map(res => res.json())
                        .do(usr => this.userCreated(usr))
                        .catch(this.handleError);
    }

    /**
     * Delete User👨🏻
     */
    deleteUser(id: number): Observable<any> {
        return this.http.delete(`${this.usersUrl}/${id}`)
                        .do(res => this.userDeleted())
                        .catch(this.handleError);
    }

    /**
     * Update a user👨🏻
     * @param user User Object
     */
    updateUser(user: User): Observable<User> {
        // return this.http.put(`${this.usersUrl}/${user.id}`, user)
        return this.http.put(`/api/users/23`, user)
                        .map(res => res.json())
                        .catch(this.handleError);
    }

    /**
     * The user👨🏻 was created. Add this info to our stream
     * @param user 
     */
    private userCreated(user: User) {
        console.log('😎 user has been created');
        this.userCreatedSource.next(user);
    }

    /**
     * The user👨🏻 was deleted. Add this info to our stream
     */
    private userDeleted() {
        console.log('😡 user has been deleted');
        this.userDeletedSource.next();
    }

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