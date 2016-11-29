import { UserServiceConfig } from './../models/user-service-config';
import { IUserService } from './definitions/user.service';
import { Injectable, Optional } from '@angular/core';

import { Observable,Subject } from 'rxjs';

let nextId = 1;

@Injectable()
export class UserService implements IUserService {
  private _userNameSubject:Subject<string>;
  private _userNameStream: Observable<string>;
  private _userName = 'Jaimito Hernandez';
  id = nextId++;

  constructor( @Optional() config: UserServiceConfig) {
    if (config) { this._userName = config.userName; }
    this._userNameSubject = new Subject<string>();
    this._userNameStream = this._userNameSubject.defaultIfEmpty(this._userName);
  }

  get userName():string {
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this._userName + suffix;
  }

  set userName(username: string) {
    this._userName = username;
    this._userNameSubject.next(username);
  }

   get userNameStream(): Observable<string>{
    return this._userNameStream;
   }
}
