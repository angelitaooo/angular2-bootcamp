import { Observable } from 'rxjs';

export interface IUserService {
     userName:string ;
     userNameStream: Observable<string>;
}
