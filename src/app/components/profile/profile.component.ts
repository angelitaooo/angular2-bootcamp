import { IUserService } from './../../services/definitions/user.service';
import { Component, OnInit,Inject } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username = '';
  private _userService:IUserService;

  constructor(@Inject('IUserService') userService: IUserService) {
     this.username = userService.userName;
     this._userService = userService;
   }

  ngOnInit() {

  }

   onSubmit() {
     this._userService.userName = this.username;
  }

}
