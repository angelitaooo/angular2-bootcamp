import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input('tipo') tipo: string;
  @Input('contenido') contenido: string;
  @Output() broadcast: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendBroadcast() {
     this.broadcast.emit( this.contenido );
  }

}
