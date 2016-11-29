import { IUserService } from './../../services/definitions/user.service';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, Input,Inject ,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnDestroy  {
  @Input() subtitle = '';
  title = 'App Structure';
  user = '';

  private userNameObserver:Subscription;

  private _userService:IUserService;
  constructor(@Inject('IUserService') userService: IUserService) {
    this._userService = userService;
  }

  ngOnInit() {
    this.user = this._userService.userName;
    this.userNameObserver = this._userService.userNameStream.subscribe(username => this.user = username);
  }

  ngOnDestroy() {
    this.userNameObserver.unsubscribe();
  }

}
