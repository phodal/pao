import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PaoLexer} from "../parser/PaoLexer";
import {PaoParser} from "../parser/PaoParser";
import {CharStreams, CommonTokenStream} from "antlr4ts";
import {ParseTreeListener, ParseTreeWalker} from "antlr4ts/tree";
import {PaoGrammarListener} from "./PaoGrammarListener";
import Mousetrap from "mousetrap";
import {MonacoEditorComponent} from "@materia-ui/ngx-monaco-editor";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit, AfterViewInit {
  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  graph = '';
  code: any = `
系统名称:庖丁解牛系统

领域事件:a
决策命令:a
领域名词:a
出规则:rule 1, rule 2, rule 3

入规则:rule 1
领域事件: b
决策命令:b
领域名词:b

字段: [
名称: Phodal
]`;
  parseResult: PaoModel;
  @ViewChild('editorComponent', null) editorElement: MonacoEditorComponent;

  ngOnInit() {
    this.renderGraph()
  }

  bindKeys() {
    var that = this;
    Mousetrap.bind(['command+s', 'ctrl+s'], function() {
      console.log('renderGraph');
      that.renderGraph();
      return false;
    });
  }
  renderGraph() {
    var that = this;
    let inputStream = CharStreams.fromString(this.code);
    let lexer = new PaoLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new PaoParser(tokenStream);
    let tree = parser.compilationUnit();

    const listener = new PaoGrammarListener();
    listener.onFinish(() => {
      that.parseResult = listener.getParseResult();
    });
    ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, tree);
  }

  ngAfterViewInit(): void {
    const that = this;
    setTimeout(() => {
      that.bindKeys();
      that.configEditor();
    }, 500)
  }

  private configEditor() {
    var monaco = (window as any).monaco;
    monaco.languages.register({id: 'pao'});
    monaco.languages.setMonarchTokensProvider('pao', {
      tokenizer: {
        root: [
          [/.*:/, "custom-error"],
          [/:.*\n/, "custom-notice"]
        ]
      }
    });

    // Define a new theme that contains only rules that match this language
    monaco.editor.defineTheme('paoTheme', {
      base: 'vs',
      inherit: false,
      rules: [
        {token: 'custom-info', foreground: '808080'},
        {token: 'custom-error', foreground: 'ff0000', fontStyle: 'bold'},
        {token: 'custom-notice', foreground: 'FFA500'},
      ]
    });

    monaco.languages.registerCompletionItemProvider('pao', {
      provideCompletionItems: () => {
        var suggestions = [
          {
            label: 'simpleText',
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: 'simpleText'
          }, {
            label: 'testing',
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: 'testing(${1:condition})',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
          },
          {
            label: 'ifelse',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
              'if (${1:condition}) {',
              '\t$0',
              '} else {',
              '\t',
              '}'
            ].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'If-Else Statement'
          },
          {
            label: 'domain',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
              `领域事件:\${1:condition}
决策命令:\${1:condition}
领域名词:\${1:condition}
注释:\${1:condition}
外部系统:\${1:condition}
定时任务:\${1:condition}
角色:\${1:condition}
`].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          }];
        return {suggestions: suggestions};
      }
    });

    var model = (window as any).monaco.editor.getModels()[0];
    monaco.editor.setModelLanguage(model, "pao");
    monaco.editor.setTheme('paoTheme');

    const that = this;
    this.editorElement.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function() {
      that.renderGraph();
    }, "");
  }
}
