import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {PaoLexer} from '../../parser/PaoLexer';
import {PaoParser} from '../../parser/PaoParser';
import {PaoGrammarListener} from '../../parser/PaoGrammarListener';
import {ParseTreeListener, ParseTreeWalker} from 'antlr4ts/tree';
import Mousetrap from 'mousetrap';

@Component({
  selector: 'app-editit',
  templateUrl: './editit.component.html',
  styleUrls: ['./editit.component.less']
})
export class EdititComponent implements OnInit, AfterViewInit {
  parseResult: PaoModel;
  codeData = `系统名称:庖丁解牛系统

领域事件:a
决策命令:a
领域名词:a
出规则:rule 1,rule 2,rule 3

入规则:rule 1
领域事件: b
决策命令:b
领域名词:b

入规则:rule 2
领域事件: 真不错
决策命令:b
领域名词:b

入规则:rule 3
领域事件: 下班了
决策命令:b
领域名词:b
出规则:rule 4,rule 5

入规则:rule 4
领域事件: 回到第一个规则
决策命令: 还没有
领域名词: 规则引擎

入规则:rule 5
领域事件: 回到第一个规则2
决策命令: 还没有2
领域名词: 规则引擎2

领域事件:condition
决策命令:condition
领域名词:condition

`;

  constructor() {

  }

  ngOnInit() {
    this.renderGraph();
  }

  ngAfterViewInit(): void {
    const that = this;
    setTimeout(() => {
      that.bindKeys();
    }, 500);
  }

  bindKeys() {
    const that = this;
    Mousetrap.bind(['command+s', 'ctrl+s'], () => {
      console.log('renderGraph');
      that.renderGraph();
      return false;
    });
  }

  renderGraph() {
    const that = this;
    const inputStream = CharStreams.fromString(this.codeData);
    const lexer = new PaoLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new PaoParser(tokenStream);
    const tree = parser.compilationUnit();

    const listener = new PaoGrammarListener();
    listener.onFinish(() => {
      that.parseResult = listener.getParseResult();
    });
    ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, tree);
  }

  codeChange($event: any) {
    this.codeData = $event;
    this.renderGraph();
  }
}
