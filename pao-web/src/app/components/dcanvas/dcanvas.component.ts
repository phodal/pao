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
  private maxHeight = 1;

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
    this.startDraw();
  }

  private calculatePositions(dataValue: PaoModel) {
    // tslint:disable-next-line:prefer-for-of
    this.totalLevel = 1;
    for (let i = 0; i < dataValue.objects.length; i++) {
      const object = dataValue.objects[i];
      if (object.rules) {
        dataValue.objects[i].location.column = this.totalLevel;
        dataValue.objects[i] = this.buildObjectLevel(object, dataValue.objects[i].location.column);
        this.totalLevel++;
        continue;
      }
      if (!object.ruleId && !dataValue.objects[i].location.nodeLevel) {
        dataValue.objects[i].location.nodeLevel = this.totalLevel;
        this.totalLevel++;
      }
    }

    this.dataValue = dataValue;
  }

  private buildObjectLevel(object: DomainObject, relateParentLevel: number) {
    relateParentLevel++;
    for (let index = 0; index < object.rules.length; index++) {
      const rule = object.rules[index];
      const ruleId = (rule as RuleModel).id;
      const forkObject = this.dataValue.map[ruleId];
      if (!forkObject) {
        continue;
      }

      const changeObject = this.dataValue.objects[forkObject.location.index];

      forkObject.location.column = this.totalLevel;
      forkObject.location.indexInRules = index + 1;
      forkObject.location.nodeLevel = relateParentLevel;

      if (forkObject.rules) {
        this.dataValue.objects[forkObject.index] = this.buildObjectLevel(changeObject, relateParentLevel);
      } else {
        changeObject.location.column = this.totalLevel;
      }
    }

    if (object.rules.length * (relateParentLevel - 1) > this.maxHeight) {
      this.maxHeight = object.rules.length * (relateParentLevel - 1);
    }

    return object;
  }

  private startDraw() {
    this.draw = SVG().addTo('#drawing').size(3840, 2180);

    const initPosition = {x: 20, y: 20};
    const basePosition: NormalPosition = JSON.parse(JSON.stringify(initPosition));
    const width = CONSTANTS.RECT_WIDTH;

    const rectDistance = 20;
    let rulesCount = 1;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.dataValue.objects.length; i++) {
      const object = this.dataValue.objects[i];
      const locationMapObject = this.dataValue.map[object.id];

      const rectSize = width + rectDistance;
      if (locationMapObject && locationMapObject.location) {
        basePosition.x = this.getX(rectSize, locationMapObject, rulesCount);
        basePosition.y = this.getY(locationMapObject, rectSize);
      }

      if (object.rules && object.rules.length > 0) {
        rulesCount++;
      }

      console.log(locationMapObject.location);
      this.drawDomainItem(this.draw, basePosition, width, object);
    }
  }

  private getX(rectSize, mapObject, rulesCount: number) {
    const pos = mapObject.location.column + rulesCount - 1;
    return rectSize * (pos);
  }

  private getY(mapObject, rectSize) {
    let basicIndex = 1;
    if (mapObject.location.indexInRules) {
      basicIndex = mapObject.location.indexInRules;
    }
    return (basicIndex - 1) * rectSize * 3;
  }

  private drawDomainItem(draw: Svg, basePosition: NormalPosition, width: number, domainObject: DomainObject) {
    const domainGroup = draw.group();
    const offset = 20;

    const commandGroup = draw.group();
    const commandRect = draw.rect(width, width).fill(DOMAIN_COLORS.COMMAND).move(basePosition.x, basePosition.y);
    const commandText = this.createText(draw, domainObject.commandName, commandRect);
    commandGroup.add(commandRect);
    commandGroup.add(commandText);

    const eventGroup = draw.group();
    const eventRect = draw.rect(width, width).fill(DOMAIN_COLORS.EVENT).move(basePosition.x, basePosition.y + (width + offset) * 2);
    const eventText = this.createText(draw, domainObject.eventName, eventRect);
    eventGroup.add(eventRect);
    eventGroup.add(eventText);

    if (domainObject.ruleName) {
      const ruleGroup = draw.group();
      const ruleRect = draw.rect(width, width).fill(DOMAIN_COLORS.RULE).move(basePosition.x - width - offset,
        basePosition.y + (width + offset) * 2);
      const ruleText = this.createText(draw, domainObject.ruleName, ruleRect);
      ruleGroup.add(ruleRect);
      ruleGroup.add(ruleText);

      domainGroup.add(ruleGroup);
    }

    const conceptGroup = draw.group();
    const conceptRect = draw.rect(width, width).fill(DOMAIN_COLORS.CONCEPT).move(basePosition.x, basePosition.y + width + offset);
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
      this.dataValue.objects[i].location = {
        index: i,
        column: 0,
        nodeLevel: 1,
        indexInRules: 0
      };
      const data = JSON.parse(JSON.stringify(this.dataValue.objects[i]));
      this.dataValue.map[data.id] = data;
    }
  }
}
