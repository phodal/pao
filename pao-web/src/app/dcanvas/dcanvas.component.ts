import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dcanvas',
  templateUrl: './dcanvas.component.html',
  styleUrls: ['./dcanvas.component.less']
})
export class DcanvasComponent implements OnInit {
  data = {
    "name": "庖丁解牛系统",
    "objects": [
      {
        "eventName": "a",
        "commandName": "a",
        "rule": [],
        "concept": "a"
      },
      {
        "eventName": " b",
        "commandName": "b",
        "rule": [],
        "concept": "b"
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
