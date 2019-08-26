import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-success-alert',
    templateUrl: 'success-alert.component.html',
    styles: [`
    p {
        font-size: 40px;
        color: lime;
    }
    `]
})
export class SuccessAlertComponent implements OnInit {

    constructor() { }
  
    ngOnInit() {
    }
  
  }
  