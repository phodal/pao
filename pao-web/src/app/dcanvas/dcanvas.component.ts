import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Rect, Svg, SVG} from '@svgdotjs/svg.js';
import '@svgdotjs/svg.draggable.js'
import {CONSTANTS, DOMAIN_COLORS} from "../constant";



@Component({
  selector: 'app-dcanvas',
  templateUrl: './dcanvas.component.html',
  styleUrls: ['./dcanvas.component.less']
})
export class DcanvasComponent implements OnInit, AfterViewInit {
  get data(): PaoModel {
    return this._data;
  }

  @Input()
  set data(value: PaoModel) {
    this._data = value;
    this.drawTree();
  }
  private _data = {
    "name": "庖丁解牛系统",
    "objects": [
      {
        "eventName": "a",
        "commandName": "a",
        "rule": [],
        "conceptName": "a"
      },
      {
        "eventName": " b",
        "commandName": "b",
        "rule": [],
        "conceptName": "b"
      }
    ]
  };
  private draw: Svg;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.drawTree();
  }


  private drawTree() {
    if (this.draw) {
      this.draw.remove();
    }

    this.draw = SVG().addTo('#drawing').size(3840, 2180);


    let initPosition = {x: 20, y: 20};
    var basePosition: NormalPosition = initPosition;
    var width = CONSTANTS.RECT_WIDTH;
    for (var i = 0; i < this._data.objects.length; i++) {
      var object = this._data.objects[i];
      basePosition.x = basePosition.x + i * (width + 20);
      this.drawDomainItem(this.draw, basePosition, width, object);
    }
  }

  private drawDomainItem(draw: Svg, basePosition: NormalPosition, width: number, domainObject: DomainObject) {
    var domainGroup = draw.group();
    let offset = 25;

    var commandGroup = draw.group();
    var commandRect = draw.rect(width, width).fill(DOMAIN_COLORS.COMMAND).move(basePosition.x, basePosition.y);
    var commandText = this.createText(draw, domainObject.commandName, commandRect);
    commandGroup.add(commandRect);
    commandGroup.add(commandText);

    var eventGroup = draw.group();
    var eventRect = draw.rect(width, width).fill(DOMAIN_COLORS.EVENT).move(basePosition.x, basePosition.y + width + offset);
    var eventText = this.createText(draw, domainObject.eventName, eventRect);
    eventGroup.add(eventRect);
    eventGroup.add(eventText);

    var conceptGroup = draw.group();
    var conceptRect = draw.rect(width, width).fill(DOMAIN_COLORS.CONCEPT).move(basePosition.x, basePosition.y + width * 2 + offset * 2);
    var conceptText = this.createText(draw, domainObject.conceptName, conceptRect);
    conceptGroup.add(conceptRect);
    conceptGroup.add(conceptText);

    domainGroup.add(commandGroup);
    domainGroup.add(eventGroup);
    domainGroup.add(conceptGroup);

    domainGroup.draggable();
  }

  private createText(draw: Svg, text: string, commandRect: Rect) {
    if (text == "") {
      text = " "
    }
    var textEl = draw.text(text);
    console.log(textEl);
    textEl.move(commandRect.x() + 20, commandRect.y() + 20)
      .font({fill: '#000', family: 'Inconsolata', size: '20'});
    return textEl;
  }
}
