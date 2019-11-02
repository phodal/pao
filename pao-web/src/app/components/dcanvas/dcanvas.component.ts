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
  private maxRulesLength = 0;
  private currentRulesLength = 0;

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
    this.maxRulesLength = 0;

    for (let i = 0; i < dataValue.objects.length; i++) {
      const object: DomainObject = dataValue.objects[i];
      if (object.rules) {
        this.currentRulesLength = object.rules.length;
        object.location.column = this.totalLevel;
        object.location.currentNodeRulesLength = object.rules.length;
        dataValue.objects[i] = this.buildObjectLevel(object, object.location.column);
        this.totalLevel++;
      } else if (!object.rules && !object.ruleId) {
        object.location.column = this.totalLevel;
        dataValue.map[object.id].location.column = this.totalLevel;
        this.totalLevel++;
      } else if (object.ruleId) {
        object.location.column = this.totalLevel;
        dataValue.map[object.id].location.column = this.totalLevel;
      }

      if (this.currentRulesLength > this.maxRulesLength) {
        this.maxRulesLength = this.currentRulesLength;
      }
      this.currentRulesLength = 0;
    }

    this.dataValue = dataValue;
  }

  private buildObjectLevel(object: DomainObject, relateParentLevel: number) {
    relateParentLevel++;
    for (let index = 0; index < object.rules.length; index++) {
      const rule = object.rules[index];
      const ruleId = (rule as RuleModel).id;
      const mapChildObj = this.dataValue.map[ruleId];
      if (!mapChildObj) {
        continue;
      }

      const changeObject = this.dataValue.objects[mapChildObj.location.index];

      mapChildObj.location.column = this.totalLevel;
      mapChildObj.location.indexInRules = index + 1;
      mapChildObj.location.nodeLevel = relateParentLevel;
      mapChildObj.location.parentLevelRulesCount = this.currentRulesLength;

      if (mapChildObj.rules) {
        this.currentRulesLength = this.currentRulesLength * mapChildObj.rules.length;
        mapChildObj.location.currentNodeRulesLength = changeObject.rules.length;
        this.dataValue.objects[mapChildObj.index] = this.buildObjectLevel(changeObject, relateParentLevel);
      } else {
        changeObject.location.column = this.totalLevel;
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

      console.log(object.location);
      this.drawDomainItem(this.draw, basePosition, width, object);
    }
  }

  private getX(rectSize, mapObject, rulesCount: number) {
    const pos = mapObject.location.column + rulesCount - 1;
    return rectSize * (pos);
  }

  private getY(mapObject, rectSize) {
    const location = mapObject.location;
    const groupHeight = rectSize * 3;

    if (!location.indexInRules) {
      // TODO：改成奇偶数
      const isObb = this.maxRulesLength % 2 === 0 ? 1 : 0;
      return ((this.maxRulesLength - isObb) / 2) * groupHeight;
    }

    // TODO：更新当前节点的最大节点数
    const num = (location.indexInRules - 1) / location.parentLevelRulesCount * this.maxRulesLength;
    return num * groupHeight;
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
        indexInRules: 0,
        parentLevelRulesCount: 0,
        currentNodeRulesLength: 0
      };
      const data = JSON.parse(JSON.stringify(this.dataValue.objects[i]));
      this.dataValue.map[data.id] = data;
    }
  }
}
