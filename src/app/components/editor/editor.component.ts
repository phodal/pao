import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MonacoEditorComponent} from '@materia-ui/ngx-monaco-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit, AfterViewInit {
  @Input()
  code = '';

  @Output()
  codeChange = new EventEmitter();

  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  graph = '';
  @ViewChild('editorComponent', null) editorElement: MonacoEditorComponent;

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    const that = this;
    setTimeout(() => {
      that.configEditor();
    }, 500);
  }

  private configEditor() {
    const monaco = (window as any).monaco;
    monaco.languages.register({id: 'pao'});
    monaco.languages.setMonarchTokensProvider('pao', {
      tokenizer: {
        root: [
          [/.*:/, 'custom-error'],
          [/:.*\n/, 'custom-notice']
        ]
      }
    });

    // Define a new theme that contains only rules that match this language
    monaco.editor.defineTheme('paoTheme', {
      colors: undefined,
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
        const suggestions = [
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
        return {suggestions};
      }
    });

    const model = (window as any).monaco.editor.getModels()[0];
    monaco.editor.setModelLanguage(model, 'pao');
    // monaco.editor.setTheme('paoTheme');

    const that = this;
    // tslint:disable-next-line:no-bitwise only-arrow-functions
    this.editorElement.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function() {
      that.codeChange.emit(that.code);
    }, '');
  }
}
