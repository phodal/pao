import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SVG} from '@svgdotjs/svg.js';
import '@svgdotjs/svg.draggable.js'
import {CONSTANTS, DOMAIN_COLORS} from "../constant";

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

    var basePosition: NormalPosition = {x: 20, y: 20};
    var width = CONSTANTS.RECT_WIDTH;
    this.drawDomainItem(draw, basePosition, width);
  }

  private drawDomainItem(draw, basePosition: NormalPosition, width: number) {
    var group = draw.group();
    let offset = 25;

    var commandRect = draw.rect(width, width).fill(DOMAIN_COLORS.COMMAND).move(basePosition.x, basePosition.y);
    var eventRect = draw.rect(width, width).fill(DOMAIN_COLORS.EVENT).move(basePosition.x, basePosition.y + width + offset);
    var conceptRect = draw.rect(width, width).fill(DOMAIN_COLORS.CONCEPT).move(basePosition.x, basePosition.y + width * 2 + offset * 2);
    group.add(commandRect);
    group.add(eventRect);
    group.add(conceptRect);

    group.draggable();
  }
}
