import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SVG} from '@svgdotjs/svg.js';
import '@svgdotjs/svg.draggable.js'

@Component({
  selector: 'app-dcanvas',
  templateUrl: './dcanvas.component.html',
  styleUrls: ['./dcanvas.component.less']
})
export class DcanvasComponent implements OnInit, AfterViewInit {
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

  ngAfterViewInit(): void {
    this.drawTree();
  }


  private drawTree() {
    var draw = SVG().addTo('#drawing').size(3840, 2180);
    var rect = draw.rect(100, 100).fill('#f06').move(20, 20)

    rect.draggable();
  }
}
