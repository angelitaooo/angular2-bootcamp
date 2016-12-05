import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value = '';
  constructor() { }

  ngOnInit() {
  }

  getBroadcast(event) {
    this.value = this.value + event;
  }

  clear() {
    this.value = '';
  }

  calculate() {

    try {
      this.value = eval(this.value);
    } catch (e) {
      this.value = 'Error';
    }
  }
}
