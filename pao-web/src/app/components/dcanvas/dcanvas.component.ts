import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Rect, Svg, SVG} from '@svgdotjs/svg.js';
import '@svgdotjs/svg.draggable.js';
import {CONSTANTS, DOMAIN_COLORS} from '../../constant';


@Component({
  selector: 'app-dcanvas',
  templateUrl: './dcanvas.component.html',
  styleUrls: ['./dcanvas.component.less']
})
export class DcanvasComponent implements OnInit, AfterViewInit {
  get data(): PaoModel {
    return this.dataValue;
  }

  @Input()
  set data(value: PaoModel) {
    this.dataValue = value;
    this.drawTree();
  }

  private dataValue: PaoModel = {
    name: '庖丁解牛系统',
    map: {},
    objects: [
      {
        eventName: 'a',
        commandName: 'a',
        rules: [],
        conceptName: 'a'
      },
      {
        eventName: ' b',
        commandName: 'b',
        rules: [],
        conceptName: 'b'
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

    if (!this.dataValue) {
      return;
    }

    this.buildDataValueMap();
    console.log(this.dataValue);
    this.calculatePositions(this.dataValue);
    this.startDraw();
  }

  private calculatePositions(dataValue: PaoModel) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < dataValue.objects.length; i++) {
      const object = dataValue.objects[i];
      if (object.rules) {
        dataValue.objects[i].currentLevel = 1;
        const currentLevel = 1;
        dataValue.objects[i] = this.buildObjectLevel(object, currentLevel);
      }
    }

    console.log(dataValue);
  }

  private buildObjectLevel(object: DomainObject, currentLevel: number) {
    currentLevel++;
    for (const rule of object.rules) {
      const ruleId = (rule as RuleModel).id;
      const forkObject = this.dataValue.map[ruleId];
      if (forkObject && forkObject.hasOwnProperty('rules')) {
        this.dataValue.objects[forkObject.id] = this.buildObjectLevel(this.dataValue.objects[forkObject.id], currentLevel);
      }
    }

    return object;
  }

  private startDraw() {
    this.draw = SVG().addTo('#drawing').size(3840, 2180);

    const initPosition = {x: 20, y: 20};
    const basePosition: NormalPosition = JSON.parse(JSON.stringify(initPosition));
    const width = CONSTANTS.RECT_WIDTH;
    for (let i = 0; i < this.dataValue.objects.length; i++) {
      const object = this.dataValue.objects[i];
      basePosition.x = initPosition.x + i * (width + 20);
      this.drawDomainItem(this.draw, basePosition, width, object);

      // width * maxNum / currentChildNums / level
    }
  }

  private drawDomainItem(draw: Svg, basePosition: NormalPosition, width: number, domainObject: DomainObject) {
    const domainGroup = draw.group();
    const offset = 25;

    const commandGroup = draw.group();
    const commandRect = draw.rect(width, width).fill(DOMAIN_COLORS.COMMAND).move(basePosition.x, basePosition.y);
    const commandText = this.createText(draw, domainObject.commandName, commandRect);
    commandGroup.add(commandRect);
    commandGroup.add(commandText);

    const eventGroup = draw.group();
    const eventRect = draw.rect(width, width).fill(DOMAIN_COLORS.EVENT).move(basePosition.x, basePosition.y + width + offset);
    const eventText = this.createText(draw, domainObject.eventName, eventRect);
    eventGroup.add(eventRect);
    eventGroup.add(eventText);

    const conceptGroup = draw.group();
    const conceptRect = draw.rect(width, width).fill(DOMAIN_COLORS.CONCEPT).move(basePosition.x, basePosition.y + width * 2 + offset * 2);
    const conceptText = this.createText(draw, domainObject.conceptName, conceptRect);
    conceptGroup.add(conceptRect);
    conceptGroup.add(conceptText);

    domainGroup.add(commandGroup);
    domainGroup.add(eventGroup);
    domainGroup.add(conceptGroup);

    domainGroup.draggable();
  }

  private createText(draw: Svg, text: string, commandRect: Rect) {
    if (text === '') {
      text = ' ';
    }
    const textEl = draw.text(text);
    textEl.move(commandRect.x() + 20, commandRect.y() + 20)
      .font({fill: '#000', family: 'Inconsolata', size: '20'});
    return textEl;
  }

  private buildDataValueMap() {
    this.dataValue.map = {};
    for (let i = 0; i < this.dataValue.objects.length; i++) {
      const data = this.dataValue.objects[i];
      this.dataValue.objects[i].index = i + 1;
      this.dataValue.map[data.id] = data;
    }
  }
}
