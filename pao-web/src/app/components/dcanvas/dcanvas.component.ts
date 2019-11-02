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
  private totalLevel: number;

  get data(): PaoModel {
    return this.dataValue;
  }

  @Input()
  set data(value: PaoModel) {
    this.dataValue = value;
    this.drawTree();
  }

  private dataValue: PaoModel;
  private draw: Svg;
  private maxHeight = 3;

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
    this.calculatePositions(this.dataValue);

    console.log(this.dataValue);
    this.startDraw();
  }

  private calculatePositions(dataValue: PaoModel) {
    // tslint:disable-next-line:prefer-for-of
    this.totalLevel = 1;
    for (let i = 0; i < dataValue.objects.length; i++) {
      const object = dataValue.objects[i];
      if (object.rules.length > 0) {
        const relateParentLevel = 1;
        dataValue.objects[i].totalLevel = this.totalLevel;
        dataValue.objects[i] = this.buildObjectLevel(object, relateParentLevel);
        this.totalLevel++;
        continue;
      }
      if (!object.ruleId) {
        dataValue.objects[i].totalLevel = this.totalLevel;
        this.totalLevel++;
      }
    }

    this.dataValue = dataValue;
  }

  private buildObjectLevel(object: DomainObject, relateParentLevel: number) {
    this.totalLevel++;
    relateParentLevel++;
    for (let index = 0; index < object.rules.length; index++) {
      const rule = object.rules[index];
      const ruleId = (rule as RuleModel).id;
      const forkObject = this.dataValue.map[ruleId];
      if (!forkObject) {
        continue;
      }

      this.dataValue.map[ruleId].levelInfo = {
        index: index + 1,
        level: relateParentLevel
      };
      if (forkObject && forkObject.hasOwnProperty('rules') && forkObject.rules.length > 0) {
        // TODO: 多层规则时，肯定会出错……
        this.dataValue.objects[forkObject.index] = this.buildObjectLevel(this.dataValue.objects[forkObject.id], relateParentLevel);
      } else if (this.dataValue.objects[forkObject.index]) {
        this.dataValue.objects[forkObject.index].totalLevel = this.totalLevel;
      }
    }

    return object;
  }

  private startDraw() {
    this.draw = SVG().addTo('#drawing').size(3840, 2180);

    const initPosition = {x: 20, y: 20};
    const basePosition: NormalPosition = JSON.parse(JSON.stringify(initPosition));
    const width = CONSTANTS.RECT_WIDTH;

    const rectDistance = 20;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.dataValue.objects.length; i++) {
      const object = this.dataValue.objects[i];
      basePosition.x = initPosition.x + object.totalLevel * (width + rectDistance);
      basePosition.y = (width * this.maxHeight) / object.totalLevel;

      if (object.levelInfo) {
        basePosition.y = (object.levelInfo.index - 1) * (width + rectDistance + 30) * 3;
      }

      console.log(object.totalLevel);
      const position = {
        x: basePosition.x,
        y: basePosition.y
      };
      console.log(basePosition.x, position.y);
      this.drawDomainItem(this.draw, position, width, object);
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
      this.dataValue.objects[i].index = i;
      this.dataValue.map[data.id] = data;
    }
  }
}
